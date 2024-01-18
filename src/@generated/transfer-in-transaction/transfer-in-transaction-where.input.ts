import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumTransactionTypeFilter } from '../prisma/enum-transaction-type-filter.input';
import { PlayerRelationFilter } from '../player/player-relation-filter.input';

@InputType()
export class TransferInTransactionWhereInput {

    @Field(() => [TransferInTransactionWhereInput], {nullable:true})
    AND?: Array<TransferInTransactionWhereInput>;

    @Field(() => [TransferInTransactionWhereInput], {nullable:true})
    OR?: Array<TransferInTransactionWhereInput>;

    @Field(() => [TransferInTransactionWhereInput], {nullable:true})
    NOT?: Array<TransferInTransactionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    transfer_in_Transaction_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    player_id_r?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    currency?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    request_time?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    process_time?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    processed_by?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    transaction_date?: StringFilter;

    @Field(() => EnumTransactionTypeFilter, {nullable:true})
    status?: EnumTransactionTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    counterpart_platform?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    counterpart_username?: StringFilter;

    @Field(() => PlayerRelationFilter, {nullable:true})
    players?: PlayerRelationFilter;
}
