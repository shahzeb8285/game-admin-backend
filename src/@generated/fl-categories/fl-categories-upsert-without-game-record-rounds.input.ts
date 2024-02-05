import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { fl_categoriesUpdateWithoutGame_record_roundsInput } from './fl-categories-update-without-game-record-rounds.input';
import { Type } from 'class-transformer';
import { fl_categoriesCreateWithoutGame_record_roundsInput } from './fl-categories-create-without-game-record-rounds.input';
import { fl_categoriesWhereInput } from './fl-categories-where.input';

@InputType()
export class fl_categoriesUpsertWithoutGame_record_roundsInput {

    @Field(() => fl_categoriesUpdateWithoutGame_record_roundsInput, {nullable:false})
    @Type(() => fl_categoriesUpdateWithoutGame_record_roundsInput)
    update!: fl_categoriesUpdateWithoutGame_record_roundsInput;

    @Field(() => fl_categoriesCreateWithoutGame_record_roundsInput, {nullable:false})
    @Type(() => fl_categoriesCreateWithoutGame_record_roundsInput)
    create!: fl_categoriesCreateWithoutGame_record_roundsInput;

    @Field(() => fl_categoriesWhereInput, {nullable:true})
    @Type(() => fl_categoriesWhereInput)
    where?: fl_categoriesWhereInput;
}
