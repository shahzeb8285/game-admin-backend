import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { adminsWhereUniqueInput } from './admins-where-unique.input';
import { Type } from 'class-transformer';
import { adminsCreateInput } from './admins-create.input';
import { adminsUpdateInput } from './admins-update.input';

@ArgsType()
export class UpsertOneadminsArgs {

    @Field(() => adminsWhereUniqueInput, {nullable:false})
    @Type(() => adminsWhereUniqueInput)
    where!: Prisma.AtLeast<adminsWhereUniqueInput, 'admin_id' | 'admin_name'>;

    @Field(() => adminsCreateInput, {nullable:false})
    @Type(() => adminsCreateInput)
    create!: adminsCreateInput;

    @Field(() => adminsUpdateInput, {nullable:false})
    @Type(() => adminsUpdateInput)
    update!: adminsUpdateInput;
}
