import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AdminAccessesWhereUniqueInput } from './admin-accesses-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAdminAccessesArgs {

    @Field(() => AdminAccessesWhereUniqueInput, {nullable:false})
    @Type(() => AdminAccessesWhereUniqueInput)
    where!: Prisma.AtLeast<AdminAccessesWhereUniqueInput, 'admin_access_id' | 'access_name'>;
}
