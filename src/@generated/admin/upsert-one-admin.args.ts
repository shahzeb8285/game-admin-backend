import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AdminWhereUniqueInput } from './admin-where-unique.input';
import { Type } from 'class-transformer';
import { AdminCreateInput } from './admin-create.input';
import { AdminUpdateInput } from './admin-update.input';

@ArgsType()
export class UpsertOneAdminArgs {

    @Field(() => AdminWhereUniqueInput, {nullable:false})
    @Type(() => AdminWhereUniqueInput)
    where!: Prisma.AtLeast<AdminWhereUniqueInput, 'admin_id' | 'admin_name'>;

    @Field(() => AdminCreateInput, {nullable:false})
    @Type(() => AdminCreateInput)
    create!: AdminCreateInput;

    @Field(() => AdminUpdateInput, {nullable:false})
    @Type(() => AdminUpdateInput)
    update!: AdminUpdateInput;
}
