"""add stages_authors

Revision ID: e13394201510
Revises: 6dfa89765f8d
Create Date: 2021-07-05 01:20:57.534089

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = 'e13394201510'
down_revision = '6dfa89765f8d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('stages_authors',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('stage_id', sa.Integer(), nullable=True),
    sa.Column('author_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['author_id'], ['authors.id'], ),
    sa.ForeignKeyConstraint(['stage_id'], ['stages.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.drop_table('hotel')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('hotel',
    sa.Column('id', mysql.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('stage_id', mysql.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('author_id', mysql.INTEGER(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['author_id'], ['authors.id'], name='hotel_ibfk_1'),
    sa.ForeignKeyConstraint(['stage_id'], ['stages.id'], name='hotel_ibfk_2'),
    sa.PrimaryKeyConstraint('id'),
    mysql_default_charset='utf8',
    mysql_engine='InnoDB'
    )
    op.drop_table('stages_authors')
    # ### end Alembic commands ###
