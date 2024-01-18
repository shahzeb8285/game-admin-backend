import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminLoginLogWhereInput } from './admin-login-log-where.input';
import { Type } from 'class-transformer';
import { AdminLoginLogOrderByWithRelationInput } from './admin-login-log-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AdminLoginLogWhereUniqueInput } from './admin-login-log-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AdminLoginLogCountAggregateInput } from './admin-login-log-count-aggregate.input';
import { AdminLoginLogMinAggregateInput } from './admin-login-log-min-aggregate.input';
import { AdminLoginLogMaxAggregateInput } from './admin-login-log-max-aggregate.input';

@ArgsType()
export class AdminLoginLogAggregateArgs {

    @Field(() => AdminLoginLogWhereInput, {nullable:true})
    @Type(() => AdminLoginLogWhereInput)
    where?: AdminLoginLogWhereInput;

    @Field(() => [AdminLoginLogOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AdminLoginLogOrderByWithRelationInput>;

    @Field(() => AdminLoginLogWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AdminLoginLogWhereUniqueInput, 'login_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AdminLoginLogCountAggregateInput, {nullable:true})
    _count?: AdminLoginLogCountAggregateInput;

    @Field(() => AdminLoginLogMinAggregateInput, {nullable:true})
    _min?: AdminLoginLogMinAggregateInput;

    @Field(() => AdminLoginLogMaxAggregateInput, {nullable:true})
    _max?: AdminLoginLogMaxAggregateInput;
}
