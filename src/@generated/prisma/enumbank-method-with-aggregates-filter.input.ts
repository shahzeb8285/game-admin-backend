import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bank_method } from './bank-method.enum';
import { NestedEnumbank_methodWithAggregatesFilter } from './nested-enumbank-method-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumbank_methodFilter } from './nested-enumbank-method-filter.input';

@InputType()
export class Enumbank_methodWithAggregatesFilter {

    @Field(() => bank_method, {nullable:true})
    equals?: keyof typeof bank_method;

    @Field(() => [bank_method], {nullable:true})
    in?: Array<keyof typeof bank_method>;

    @Field(() => [bank_method], {nullable:true})
    notIn?: Array<keyof typeof bank_method>;

    @Field(() => NestedEnumbank_methodWithAggregatesFilter, {nullable:true})
    not?: NestedEnumbank_methodWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumbank_methodFilter, {nullable:true})
    _min?: NestedEnumbank_methodFilter;

    @Field(() => NestedEnumbank_methodFilter, {nullable:true})
    _max?: NestedEnumbank_methodFilter;
}
