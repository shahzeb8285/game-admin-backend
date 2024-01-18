import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlayerLoginLogWhereInput } from './player-login-log-where.input';
import { Type } from 'class-transformer';
import { PlayerLoginLogOrderByWithRelationInput } from './player-login-log-order-by-with-relation.input';
import { PlayerLoginLogWhereUniqueInput } from './player-login-log-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PlayerLoginLogScalarFieldEnum } from './player-login-log-scalar-field.enum';

@ArgsType()
export class FindManyPlayerLoginLogArgs {

    @Field(() => PlayerLoginLogWhereInput, {nullable:true})
    @Type(() => PlayerLoginLogWhereInput)
    where?: PlayerLoginLogWhereInput;

    @Field(() => [PlayerLoginLogOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PlayerLoginLogOrderByWithRelationInput>;

    @Field(() => PlayerLoginLogWhereUniqueInput, {nullable:true})
    cursor?: PlayerLoginLogWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PlayerLoginLogScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PlayerLoginLogScalarFieldEnum>;
}
