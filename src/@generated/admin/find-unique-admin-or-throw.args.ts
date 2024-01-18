import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AdminWhereUniqueInput } from './admin-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAdminOrThrowArgs {

    @Field(() => AdminWhereUniqueInput, {nullable:false})
    @Type(() => AdminWhereUniqueInput)
    where!: Prisma.AtLeast<AdminWhereUniqueInput, 'admin_id' | 'admin_name'>;
}
