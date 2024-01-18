import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminsWhereInput } from './admins-where.input';
import { Type } from 'class-transformer';
import { AdminsOrderByWithRelationInput } from './admins-order-by-with-relation.input';
import { AdminsWhereUniqueInput } from './admins-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AdminsScalarFieldEnum } from './admins-scalar-field.enum';

@ArgsType()
export class FindManyAdminsArgs {

    @Field(() => AdminsWhereInput, {nullable:true})
    @Type(() => AdminsWhereInput)
    where?: AdminsWhereInput;

    @Field(() => [AdminsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AdminsOrderByWithRelationInput>;

    @Field(() => AdminsWhereUniqueInput, {nullable:true})
    cursor?: AdminsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AdminsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AdminsScalarFieldEnum>;
}
