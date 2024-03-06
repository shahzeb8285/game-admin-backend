import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class banksScalarWhereWithAggregatesInput {

    @Field(() => [banksScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<banksScalarWhereWithAggregatesInput>;

    @Field(() => [banksScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<banksScalarWhereWithAggregatesInput>;

    @Field(() => [banksScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<banksScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    bank_id?: UuidWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    bank_name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    bank_code?: StringWithAggregatesFilter;
}
