import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AdminAccessesWhereUniqueInput } from './admin-accesses-where-unique.input';
import { Type } from 'class-transformer';
import { AdminAccessesCreateInput } from './admin-accesses-create.input';
import { AdminAccessesUpdateInput } from './admin-accesses-update.input';

@ArgsType()
export class UpsertOneAdminAccessesArgs {

    @Field(() => AdminAccessesWhereUniqueInput, {nullable:false})
    @Type(() => AdminAccessesWhereUniqueInput)
    where!: Prisma.AtLeast<AdminAccessesWhereUniqueInput, 'admin_access_id' | 'access_name'>;

    @Field(() => AdminAccessesCreateInput, {nullable:false})
    @Type(() => AdminAccessesCreateInput)
    create!: AdminAccessesCreateInput;

    @Field(() => AdminAccessesUpdateInput, {nullable:false})
    @Type(() => AdminAccessesUpdateInput)
    update!: AdminAccessesUpdateInput;
}
