import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsWhereUniqueInput } from './game-record-rounds-where-unique.input';
import { Type } from 'class-transformer';
import { game_record_roundsUpdateWithoutCategoryInput } from './game-record-rounds-update-without-category.input';
import { game_record_roundsCreateWithoutCategoryInput } from './game-record-rounds-create-without-category.input';

@InputType()
export class game_record_roundsUpsertWithWhereUniqueWithoutCategoryInput {

    @Field(() => game_record_roundsWhereUniqueInput, {nullable:false})
    @Type(() => game_record_roundsWhereUniqueInput)
    where!: game_record_roundsWhereUniqueInput;

    @Field(() => game_record_roundsUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => game_record_roundsUpdateWithoutCategoryInput)
    update!: game_record_roundsUpdateWithoutCategoryInput;

    @Field(() => game_record_roundsCreateWithoutCategoryInput, {nullable:false})
    @Type(() => game_record_roundsCreateWithoutCategoryInput)
    create!: game_record_roundsCreateWithoutCategoryInput;
}
