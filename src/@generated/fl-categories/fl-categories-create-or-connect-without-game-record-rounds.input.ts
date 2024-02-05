import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { fl_categoriesWhereUniqueInput } from './fl-categories-where-unique.input';
import { Type } from 'class-transformer';
import { fl_categoriesCreateWithoutGame_record_roundsInput } from './fl-categories-create-without-game-record-rounds.input';

@InputType()
export class fl_categoriesCreateOrConnectWithoutGame_record_roundsInput {

    @Field(() => fl_categoriesWhereUniqueInput, {nullable:false})
    @Type(() => fl_categoriesWhereUniqueInput)
    where!: fl_categoriesWhereUniqueInput;

    @Field(() => fl_categoriesCreateWithoutGame_record_roundsInput, {nullable:false})
    @Type(() => fl_categoriesCreateWithoutGame_record_roundsInput)
    create!: fl_categoriesCreateWithoutGame_record_roundsInput;
}
