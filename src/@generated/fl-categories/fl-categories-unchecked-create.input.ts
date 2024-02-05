import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { game_record_roundsUncheckedCreateNestedManyWithoutCategoryInput } from '../game-record-rounds/game-record-rounds-unchecked-create-nested-many-without-category.input';

@InputType()
export class fl_categoriesUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    fl_categories_id?: string;

    @Field(() => Int, {nullable:false})
    category_id!: number;

    @Field(() => String, {nullable:false})
    category_name!: string;

    @Field(() => Int, {nullable:false})
    csort!: number;

    @Field(() => Int, {nullable:true})
    rebate_priority?: number;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => game_record_roundsUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    game_record_rounds?: game_record_roundsUncheckedCreateNestedManyWithoutCategoryInput;
}
