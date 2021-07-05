"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _freeBrandsSvgIcons = require("@fortawesome/free-brands-svg-icons");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var data = {
  navMenu: [{
    id: 1,
    label: 'Recommended',
    path: '#Recommended',
    offset: '84'
  }, {
    id: 2,
    label: 'Tutorial',
    path: '#Tutorial',
    offset: '81'
  }, {
    id: 3,
    label: 'FAQ',
    path: '#FAQ',
    offset: '81'
  }, {
    id: 4,
    label: 'Become a Matching Partner',
    path: '#Become a Matching Partner',
    offset: '81'
  }],
  // Temporary hard code data 
  projects: [{
    id: 1,
    title: 'Project 1',
    description: 'Description of Project 1: Projext X is a decentralized smart contract application built on Substrate that we use to demonstrate this wirefreme.',
    contents: ['Content of Project 1: Projext 1 is a decentralized smart contract application built on Substrate that we use to demonstrate this wirefreme.', 'Content of Project 1: Projext 1 is a decentralized smart contract application built on Substrate that we use to demonstrate this wirefreme.', 'Content of Project 1: Projext 1 is a decentralized smart contract application built on Substrate that we use to demonstrate this wirefreme.'],
    creator: {
      photo: '',
      username: '@username',
      create: '2021-02-02',
      address: '5E1dfPXKpXYv9yE2MrkCYd2gr4QqUKfVAXhCCB1VNQTxQxV1'
    },
    socialElements: 'Also liked by @alice, @bob, @charlie and others',
    socialMedia: {
      twitter: {
        link: 'https://twitter.com/OAKSubstrate',
        icon: _freeBrandsSvgIcons.faTwitter
      },
      website: {
        link: 'https://oak.tech/',
        icon: _freeBrandsSvgIcons.faInternetExplorer
      }
    },
    teamMembers: [{
      photo: '',
      name: 'Developer A',
      experience: 'Experience of developer A'
    }, {
      photo: '',
      name: 'Developer B',
      experience: 'Experience of developer B'
    }, {
      photo: '',
      name: 'Developer C',
      experience: 'Experience of developer C'
    }]
  }, {
    id: 2,
    title: 'Project 2',
    description: 'Description of Project 2: Projext X is a decentralized smart contract application built on Substrate that we use to demonstrate this wirefreme.',
    contents: ['Content of Project 2: Projext 2 is a decentralized smart contract application built on Substrate that we use to demonstrate this wirefreme.', 'Content of Project 2: Projext 2 is a decentralized smart contract application built on Substrate that we use to demonstrate this wirefreme.', 'Content of Project 2: Projext 2 is a decentralized smart contract application built on Substrate that we use to demonstrate this wirefreme.'],
    creator: {
      photo: '',
      username: '@username',
      create: '2021-02-02',
      address: '5E1dfPXKpXYv9yE2MrkCYd2gr4QqUKfVAXhCCB1VNQTxQxV1'
    },
    socialElements: 'Also liked by @alice, @bob, @charlie and others',
    socialMedia: {
      twitter: {
        link: 'https://twitter.com/OAKSubstrate',
        icon: _freeBrandsSvgIcons.faTwitter
      },
      website: {
        link: 'https://oak.tech/',
        icon: _freeBrandsSvgIcons.faInternetExplorer
      }
    }
  }, {
    id: 3,
    title: 'Project 3',
    description: 'Description of Project 3: Projext X is a decentralized smart contract application built on Substrate that we use to demonstrate this wirefreme.',
    contents: ['Content of Project 3: Projext 3 is a decentralized smart contract application built on Substrate that we use to demonstrate this wirefreme.', 'Content of Project 3: Projext 3 is a decentralized smart contract application built on Substrate that we use to demonstrate this wirefreme.', 'Content of Project 3: Projext 3 is a decentralized smart contract application built on Substrate that we use to demonstrate this wirefreme.'],
    creator: {
      photo: '',
      username: '@username',
      create: '2021-02-02',
      address: '5E1dfPXKpXYv9yE2MrkCYd2gr4QqUKfVAXhCCB1VNQTxQxV1'
    },
    socialElements: 'Also liked by @alice, @bob, @charlie and others',
    socialMedia: {
      twitter: {
        link: 'https://twitter.com/OAKSubstrate',
        icon: _freeBrandsSvgIcons.faTwitter
      },
      website: {
        link: 'https://oak.tech/',
        icon: _freeBrandsSvgIcons.faInternetExplorer
      }
    }
  }, {
    id: 4,
    title: 'Project 4',
    description: 'Description of Project 4: Projext X is a decentralized smart contract application built on Substrate that we use to demonstrate this wirefreme.',
    contents: ['Content of Project 4: Projext 4 is a decentralized smart contract application built on Substrate that we use to demonstrate this wirefreme.', 'Content of Project 4: Projext 4 is a decentralized smart contract application built on Substrate that we use to demonstrate this wirefreme.', 'Content of Project 4: Projext 4 is a decentralized smart contract application built on Substrate that we use to demonstrate this wirefreme.'],
    creator: {
      photo: '',
      username: '@username',
      create: '2021-02-02',
      address: '5E1dfPXKpXYv9yE2MrkCYd2gr4QqUKfVAXhCCB1VNQTxQxV1'
    },
    socialElements: 'Also liked by @alice, @bob, @charlie and others',
    socialMedia: {
      twitter: {
        link: 'https://twitter.com/OAKSubstrate',
        icon: _freeBrandsSvgIcons.faTwitter
      },
      website: {
        link: 'https://oak.tech/',
        icon: _freeBrandsSvgIcons.faInternetExplorer
      }
    }
  }, {
    id: 5,
    title: 'Project 5',
    description: 'Description of Project 5: Projext X is a decentralized smart contract application built on Substrate that we use to demonstrate this wirefreme.',
    contents: ['Content of Project 5: Projext 5 is a decentralized smart contract application built on Substrate that we use to demonstrate this wirefreme.', 'Content of Project 5: Projext 5 is a decentralized smart contract application built on Substrate that we use to demonstrate this wirefreme.', 'Content of Project 5: Projext 5 is a decentralized smart contract application built on Substrate that we use to demonstrate this wirefreme.'],
    creator: {
      photo: '',
      username: '@username',
      create: '2021-02-02',
      address: '5E1dfPXKpXYv9yE2MrkCYd2gr4QqUKfVAXhCCB1VNQTxQxV1'
    },
    socialElements: 'Also liked by @alice, @bob, @charlie and others',
    socialMedia: {
      twitter: {
        link: 'https://twitter.com/OAKSubstrate',
        icon: _freeBrandsSvgIcons.faTwitter
      },
      website: {
        link: 'https://oak.tech/',
        icon: _freeBrandsSvgIcons.faInternetExplorer
      }
    }
  }, {
    id: 6,
    title: 'Project 6',
    description: 'Description of Project 6: Projext X is a decentralized smart contract application built on Substrate that we use to demonstrate this wirefreme.',
    contents: ['Content of Project 6: Projext 6 is a decentralized smart contract application built on Substrate that we use to demonstrate this wirefreme.', 'Content of Project 6: Projext 6 is a decentralized smart contract application built on Substrate that we use to demonstrate this wirefreme.', 'Content of Project 6: Projext 6 is a decentralized smart contract application built on Substrate that we use to demonstrate this wirefreme.'],
    creator: {
      photo: '',
      username: '@username',
      create: '2021-02-02',
      address: '5E1dfPXKpXYv9yE2MrkCYd2gr4QqUKfVAXhCCB1VNQTxQxV1'
    },
    socialElements: 'Also liked by @alice, @bob, @charlie and others',
    socialMedia: {
      twitter: {
        link: 'https://twitter.com/OAKSubstrate',
        icon: _freeBrandsSvgIcons.faTwitter
      },
      website: {
        link: 'https://oak.tech/',
        icon: _freeBrandsSvgIcons.faInternetExplorer
      }
    }
  }],
  footerMenu: {
    about: {
      display: 'About',
      url: ''
    },
    product: {
      display: 'Product',
      url: ''
    },
    community: {
      display: 'Community',
      url: ''
    },
    terms: {
      display: 'Terms',
      url: ''
    }
  },
  socialMedia: {
    twitter: {
      link: 'https://twitter.com/OAKSubstrate',
      icon: _freeBrandsSvgIcons.faTwitter
    },
    discord: {
      link: '',
      icon: _freeBrandsSvgIcons.faDiscord
    },
    wechat: {
      link: '',
      icon: _freeBrandsSvgIcons.faWeixin
    },
    telegram: {
      link: '',
      icon: _freeBrandsSvgIcons.faTelegram
    },
    facebook: {
      link: '123',
      icon: _freeBrandsSvgIcons.faFacebook
    },
    medium: {
      link: '',
      icon: _freeBrandsSvgIcons.faMedium
    },
    linkedin: {
      link: '123',
      icon: _freeBrandsSvgIcons.faLinkedin
    },
    github: {
      link: '',
      icon: _freeBrandsSvgIcons.faGithubSquare
    },
    email: {
      link: 'https://twitter.com/OAKSubstrate',
      icon: _freeSolidSvgIcons.faEnvelopeSquare
    }
  }
};
var _default = data;
exports["default"] = _default;