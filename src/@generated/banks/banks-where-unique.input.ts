import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { banksWhereInput } from './banks-where.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class banksWhereUniqueInput {

    @Field(() => String, {nullable:true})
    bank_id?: string;

    @Field(() => [banksWhereInput], {nullable:true})
    AND?: Array<banksWhereInput>;

    @Field(() => [banksWhereInput], {nullable:true})
    OR?: Array<banksWhereInput>;

    @Field(() => [banksWhereInput], {nullable:true})
    NOT?: Array<banksWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    bank_name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    bank_code?: StringFilter;
}
