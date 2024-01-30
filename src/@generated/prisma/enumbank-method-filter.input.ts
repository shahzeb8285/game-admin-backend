import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bank_method } from './bank-method.enum';
import { NestedEnumbank_methodFilter } from './nested-enumbank-method-filter.input';

@InputType()
export class Enumbank_methodFilter {

    @Field(() => bank_method, {nullable:true})
    equals?: keyof typeof bank_method;

    @Field(() => [bank_method], {nullable:true})
    in?: Array<keyof typeof bank_method>;

    @Field(() => [bank_method], {nullable:true})
    notIn?: Array<keyof typeof bank_method>;

    @Field(() => NestedEnumbank_methodFilter, {nullable:true})
    not?: NestedEnumbank_methodFilter;
}
