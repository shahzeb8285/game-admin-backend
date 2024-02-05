import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { fl_categoriesCreateWithoutGame_record_roundsInput } from './fl-categories-create-without-game-record-rounds.input';
import { Type } from 'class-transformer';
import { fl_categoriesCreateOrConnectWithoutGame_record_roundsInput } from './fl-categories-create-or-connect-without-game-record-rounds.input';
import { fl_categoriesWhereUniqueInput } from './fl-categories-where-unique.input';

@InputType()
export class fl_categoriesCreateNestedOneWithoutGame_record_roundsInput {

    @Field(() => fl_categoriesCreateWithoutGame_record_roundsInput, {nullable:true})
    @Type(() => fl_categoriesCreateWithoutGame_record_roundsInput)
    create?: fl_categoriesCreateWithoutGame_record_roundsInput;

    @Field(() => fl_categoriesCreateOrConnectWithoutGame_record_roundsInput, {nullable:true})
    @Type(() => fl_categoriesCreateOrConnectWithoutGame_record_roundsInput)
    connectOrCreate?: fl_categoriesCreateOrConnectWithoutGame_record_roundsInput;

    @Field(() => fl_categoriesWhereUniqueInput, {nullable:true})
    @Type(() => fl_categoriesWhereUniqueInput)
    connect?: fl_categoriesWhereUniqueInput;
}
