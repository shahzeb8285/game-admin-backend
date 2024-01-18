import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminAccessesUpdateInput } from './admin-accesses-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AdminAccessesWhereUniqueInput } from './admin-accesses-where-unique.input';

@ArgsType()
export class UpdateOneAdminAccessesArgs {

    @Field(() => AdminAccessesUpdateInput, {nullable:false})
    @Type(() => AdminAccessesUpdateInput)
    data!: AdminAccessesUpdateInput;

    @Field(() => AdminAccessesWhereUniqueInput, {nullable:false})
    @Type(() => AdminAccessesWhereUniqueInput)
    where!: Prisma.AtLeast<AdminAccessesWhereUniqueInput, 'admin_access_id' | 'access_name'>;
}
