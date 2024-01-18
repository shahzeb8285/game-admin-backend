import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlayerLoginLogWhereInput } from './player-login-log-where.input';
import { Type } from 'class-transformer';
import { PlayerLoginLogOrderByWithAggregationInput } from './player-login-log-order-by-with-aggregation.input';
import { PlayerLoginLogScalarFieldEnum } from './player-login-log-scalar-field.enum';
import { PlayerLoginLogScalarWhereWithAggregatesInput } from './player-login-log-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PlayerLoginLogCountAggregateInput } from './player-login-log-count-aggregate.input';
import { PlayerLoginLogMinAggregateInput } from './player-login-log-min-aggregate.input';
import { PlayerLoginLogMaxAggregateInput } from './player-login-log-max-aggregate.input';

@ArgsType()
export class PlayerLoginLogGroupByArgs {

    @Field(() => PlayerLoginLogWhereInput, {nullable:true})
    @Type(() => PlayerLoginLogWhereInput)
    where?: PlayerLoginLogWhereInput;

    @Field(() => [PlayerLoginLogOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PlayerLoginLogOrderByWithAggregationInput>;

    @Field(() => [PlayerLoginLogScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PlayerLoginLogScalarFieldEnum>;

    @Field(() => PlayerLoginLogScalarWhereWithAggregatesInput, {nullable:true})
    having?: PlayerLoginLogScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PlayerLoginLogCountAggregateInput, {nullable:true})
    _count?: PlayerLoginLogCountAggregateInput;

    @Field(() => PlayerLoginLogMinAggregateInput, {nullable:true})
    _min?: PlayerLoginLogMinAggregateInput;

    @Field(() => PlayerLoginLogMaxAggregateInput, {nullable:true})
    _max?: PlayerLoginLogMaxAggregateInput;
}
