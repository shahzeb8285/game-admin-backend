import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PlayerWalletScalarWhereInput {

    @Field(() => [PlayerWalletScalarWhereInput], {nullable:true})
    AND?: Array<PlayerWalletScalarWhereInput>;

    @Field(() => [PlayerWalletScalarWhereInput], {nullable:true})
    OR?: Array<PlayerWalletScalarWhereInput>;

    @Field(() => [PlayerWalletScalarWhereInput], {nullable:true})
    NOT?: Array<PlayerWalletScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    player_wallet_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    player_id_r?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    currency?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    frozen_amount?: FloatFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    udate?: DateTimeFilter;
}
