import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { adminsWhereUniqueInput } from './admins-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueadminsArgs {

    @Field(() => adminsWhereUniqueInput, {nullable:false})
    @Type(() => adminsWhereUniqueInput)
    where!: Prisma.AtLeast<adminsWhereUniqueInput, 'admin_id' | 'admin_name'>;
}
