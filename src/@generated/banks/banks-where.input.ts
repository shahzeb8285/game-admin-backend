import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class banksWhereInput {

    @Field(() => [banksWhereInput], {nullable:true})
    AND?: Array<banksWhereInput>;

    @Field(() => [banksWhereInput], {nullable:true})
    OR?: Array<banksWhereInput>;

    @Field(() => [banksWhereInput], {nullable:true})
    NOT?: Array<banksWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    bank_id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    bank_name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    bank_code?: StringFilter;
}
