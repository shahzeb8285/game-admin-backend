import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_accessesWhereInput } from '../admin-accesses/admin-accesses-where.input';
import { Type } from 'class-transformer';
import { admin_accessesOrderByWithRelationInput } from '../admin-accesses/admin-accesses-order-by-with-relation.input';
import { admin_accessesWhereUniqueInput } from '../admin-accesses/admin-accesses-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Admin_accessesScalarFieldEnum } from './admin-accesses-scalar-field.enum';

@ArgsType()
export class FindFirstadminAccessesOrThrowArgs {

    @Field(() => admin_accessesWhereInput, {nullable:true})
    @Type(() => admin_accessesWhereInput)
    where?: admin_accessesWhereInput;

    @Field(() => [admin_accessesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<admin_accessesOrderByWithRelationInput>;

    @Field(() => admin_accessesWhereUniqueInput, {nullable:true})
    cursor?: admin_accessesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Admin_accessesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Admin_accessesScalarFieldEnum>;
}
