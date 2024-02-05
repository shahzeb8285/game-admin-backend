import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsWhereUniqueInput } from './game-record-rounds-where-unique.input';
import { Type } from 'class-transformer';
import { game_record_roundsUpdateWithoutCategoryInput } from './game-record-rounds-update-without-category.input';

@InputType()
export class game_record_roundsUpdateWithWhereUniqueWithoutCategoryInput {

    @Field(() => game_record_roundsWhereUniqueInput, {nullable:false})
    @Type(() => game_record_roundsWhereUniqueInput)
    where!: game_record_roundsWhereUniqueInput;

    @Field(() => game_record_roundsUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => game_record_roundsUpdateWithoutCategoryInput)
    data!: game_record_roundsUpdateWithoutCategoryInput;
}
