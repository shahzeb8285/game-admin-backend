import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { rebate_status } from './rebate-status.enum';
import { NestedEnumrebate_statusWithAggregatesFilter } from './nested-enumrebate-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumrebate_statusFilter } from './nested-enumrebate-status-filter.input';

@InputType()
export class Enumrebate_statusWithAggregatesFilter {

    @Field(() => rebate_status, {nullable:true})
    equals?: keyof typeof rebate_status;

    @Field(() => [rebate_status], {nullable:true})
    in?: Array<keyof typeof rebate_status>;

    @Field(() => [rebate_status], {nullable:true})
    notIn?: Array<keyof typeof rebate_status>;

    @Field(() => NestedEnumrebate_statusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumrebate_statusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumrebate_statusFilter, {nullable:true})
    _min?: NestedEnumrebate_statusFilter;

    @Field(() => NestedEnumrebate_statusFilter, {nullable:true})
    _max?: NestedEnumrebate_statusFilter;
}
