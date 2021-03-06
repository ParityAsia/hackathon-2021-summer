// Copyright 2017-2020 @polkadot/app-addresses authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { DeriveAccountInfo, DeriveBalancesAll } from '@polkadot/api-derive/types';
import { PowerSize } from '@polkadot/types/interfaces';
import { KeyringAddress } from '@polkadot/ui-keyring/types';
import { ActionStatus } from '@polkadot/react-components/Status/types';
import { ThemeDef } from '@polkadot/react-components/types';

import React, { useCallback, useContext, useEffect, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Transfer from '@polkadot/app-accounts/modals/Transfer';
import { AddressInfoKP, AddressSmall, AddressInfo, Button, ChainLock, Icon, LinkExternal, Forget, Menu, Popup, Tags } from '@polkadot/react-components';
import { useApi, useCall } from '@polkadot/react-hooks';
import keyring from '@polkadot/ui-keyring';
import { BN_ZERO, formatNumber } from '@polkadot/util';

import { useTranslation } from '../translate';

interface Props {
  address: string;
  className?: string;
  filter: string;
  isFavorite: boolean;
  toggleFavorite: (address: string) => void;
}

const WITH_BALANCE = { available: true, bonded: true, free: true, locked: true, reserved: true, total: true, unlocking: true };

const isEditable = true;

function Address ({ address, className = '', filter, isFavorite, toggleFavorite }: Props): React.ReactElement<Props> | null {
  const { t } = useTranslation();
  const { theme } = useContext<ThemeDef>(ThemeContext);
  const api = useApi();
  const info = useCall<DeriveAccountInfo>(api.api.derive.accounts.info, [address]);
  const balancesAll = useCall<DeriveBalancesAll>(api.api.derive.balances.all, [address]);
  const [tags, setTags] = useState<string[]>([]);
  const [accName, setAccName] = useState('');
  const [current, setCurrent] = useState<KeyringAddress | null>(null);
  const [genesisHash, setGenesisHash] = useState<string | null>(null);
  const [isForgetOpen, setIsForgetOpen] = useState(false);
  const [isSettingPopupOpen, setIsSettingPopupOpen] = useState(false);
  const [isTransferOpen, setIsTransferOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const _setTags = useCallback(
    (tags: string[]): void => setTags(tags.sort()),
    []
  );

  useEffect((): void => {
    const current = keyring.getAddress(address);

    setCurrent(current || null);
    setGenesisHash((current && current.meta.genesisHash) || null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect((): void => {
    const { identity, nickname } = info || {};

    if (api.api.query.identity && api.api.query.identity.identityOf) {
      if (identity?.display) {
        setAccName(identity.display);
      }
    } else if (nickname) {
      setAccName(nickname);
    }
  }, [api, info]);

  useEffect((): void => {
    const account = keyring.getAddress(address);

    _setTags(account?.meta?.tags as string[] || []);
    setAccName(account?.meta?.name || '');
  }, [_setTags, address]);

  useEffect((): void => {
    if (filter.length === 0) {
      setIsVisible(true);
    } else {
      const _filter = filter.toLowerCase();

      setIsVisible(
        tags.reduce((result: boolean, tag: string): boolean => {
          return result || tag.toLowerCase().includes(_filter);
        }, accName.toLowerCase().includes(_filter))
      );
    }
  }, [accName, filter, tags]);

  const _onGenesisChange = useCallback(
    (genesisHash: string | null): void => {
      setGenesisHash(genesisHash);

      const account = keyring.getAddress(address);

      account && keyring.saveAddress(address, { ...account.meta, genesisHash });

      setGenesisHash(genesisHash);
    },
    [address]
  );

  const _onFavorite = useCallback(
    (): void => toggleFavorite(address),
    [address, toggleFavorite]
  );

  const _toggleForget = useCallback(
    (): void => setIsForgetOpen(!isForgetOpen),
    [isForgetOpen]
  );

  const _toggleSettingPopup = useCallback(
    (): void => setIsSettingPopupOpen(!isSettingPopupOpen),
    [isSettingPopupOpen]
  );

  const _toggleTransfer = useCallback(
    (): void => setIsTransferOpen(!isTransferOpen),
    [isTransferOpen]
  );

  const _onForget = useCallback(
    (): void => {
      if (address) {
        const status: Partial<ActionStatus> = {
          account: address,
          action: 'forget'
        };

        try {
          keyring.forgetAddress(address);
          status.status = 'success';
          status.message = t<string>('address forgotten');
        } catch (error) {
          status.status = 'error';
          status.message = (error as Error).message;
        }
      }
    },
    [address, t]
  );

  //const params = useMemo(() => [address]);
  const singlePower = useCall<PowerSize>(api.api.derive.kp.accountPower, [address]);
  /*var newStatistics: Array=[];
//  const statistics = useCall<AccountStatistics>(api.api.derive.kp.accountStatistics,[address]);
   if (!!statistics) {
    var newObj=statistics?.toJSON();
    newStatistics.push(newObj);//
  } */

  //?????????????????????????????? ????????????
  var Value: any;//????????????
  if(!!singlePower){
    Value=[
      {
      "appName":'??????app',
      "appId":'10000001',
      "power":( parseFloat(singlePower+'') / 100.00 ).toFixed(2) + '',
      }
    ];
  }else{
    Value=[
      {
      "appName":'??????app',
      "appId":'10000001',
      "power":'0.00',
      }
    ];
  }

  if (!isVisible) {
    return null;
  }

  return (
    <tr className={className}>
      <td className='favorite'>
        <Icon
          color={isFavorite ? 'orange' : 'gray'}
          icon='star'
          onClick={_onFavorite}
        />
      </td>
      <td className='address'>
        <AddressSmall value={address} />
        {address && current && (
          <>
            {isForgetOpen && (
              <Forget
                address={current.address}
                key='modal-forget-account'
                mode='address'
                onClose={_toggleForget}
                onForget={_onForget}
              />
            )}
            {isTransferOpen && (
              <Transfer
                key='modal-transfer'
                onClose={_toggleTransfer}
                recipientId={address}
              />
            )}
          </>
        )}
      </td>
      <td className='all'>
        <div className='tags'>
          <Tags value={tags} />
        </div>
      </td>
      <td className='number media--1500'>
        {balancesAll?.accountNonce.gt(BN_ZERO) && formatNumber(balancesAll.accountNonce)}
      </td>
      <td className='number'>
        <AddressInfoKP
          kpInfo={Value}
          address={address}
          withBalance
          withBalanceToggle
          withExtended={false}
        />
      </td>
      <td className='number'>
        <AddressInfo
          address={address}
          withBalance={WITH_BALANCE}
          withBalanceToggle
          withExtended={false}
        />
      </td>
      <td className='button'>
        {api.api.tx.balances?.transfer && (
          <Button
            icon='paper-plane'
            key='send'
            label={t<string>('send')}
            onClick={_toggleTransfer}
          />
        )}
        <Popup
          className={`theme--${theme}`}
          isOpen={isSettingPopupOpen}
          onClose={_toggleSettingPopup}
          trigger={
            <Button
              icon='ellipsis-v'
              onClick={_toggleSettingPopup}
            />
          }
        >
          <Menu
            onClick={_toggleSettingPopup}
            text
            vertical
          >
            <Menu.Item
              disabled={!isEditable}
              onClick={_toggleForget}
            >
              {t<string>('Forget this address')}
            </Menu.Item>
            <Menu.Divider />
            <ChainLock
              className='addresses--network-toggle'
              genesisHash={genesisHash}
              isDisabled={!isEditable || api.isDevelopment}
              onChange={_onGenesisChange}
            />
          </Menu>
        </Popup>
      </td>
      <td className='links media--1400'>
        <LinkExternal
          className='ui--AddressCard-exporer-link'
          data={address}
          isLogo
          type='address'
        />
      </td>
    </tr>
  );
}

export default React.memo(styled(Address)`
  .tags {
    width: 100%;
    min-height: 1.5rem;
  }
`);
