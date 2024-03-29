import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { adminsUpdateInput } from './admins-update.input';
import { Type } from 'class-transformer';
import { adminsWhereUniqueInput } from './admins-where-unique.input';

@ArgsType()
export class UpdateOneadminsArgs {

    @Field(() => adminsUpdateInput, {nullable:false})
    @Type(() => adminsUpdateInput)
    data!: adminsUpdateInput;

    @Field(() => adminsWhereUniqueInput, {nullable:false})
    @Type(() => adminsWhereUniqueInput)
    where!: adminsWhereUniqueInput;
}
