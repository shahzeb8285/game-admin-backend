import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminAccessesWhereInput } from './admin-accesses-where.input';
import { Type } from 'class-transformer';
import { AdminAccessesOrderByWithRelationInput } from './admin-accesses-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AdminAccessesWhereUniqueInput } from './admin-accesses-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AdminAccessesScalarFieldEnum } from './admin-accesses-scalar-field.enum';

@ArgsType()
export class FindFirstAdminAccessesArgs {

    @Field(() => AdminAccessesWhereInput, {nullable:true})
    @Type(() => AdminAccessesWhereInput)
    where?: AdminAccessesWhereInput;

    @Field(() => [AdminAccessesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AdminAccessesOrderByWithRelationInput>;

    @Field(() => AdminAccessesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AdminAccessesWhereUniqueInput, 'admin_access_id' | 'access_name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AdminAccessesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AdminAccessesScalarFieldEnum>;
}
