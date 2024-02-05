import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { fl_categoriesWhereInput } from './fl-categories-where.input';
import { Type } from 'class-transformer';
import { fl_categoriesUpdateWithoutGame_record_roundsInput } from './fl-categories-update-without-game-record-rounds.input';

@InputType()
export class fl_categoriesUpdateToOneWithWhereWithoutGame_record_roundsInput {

    @Field(() => fl_categoriesWhereInput, {nullable:true})
    @Type(() => fl_categoriesWhereInput)
    where?: fl_categoriesWhereInput;

    @Field(() => fl_categoriesUpdateWithoutGame_record_roundsInput, {nullable:false})
    @Type(() => fl_categoriesUpdateWithoutGame_record_roundsInput)
    data!: fl_categoriesUpdateWithoutGame_record_roundsInput;
}
