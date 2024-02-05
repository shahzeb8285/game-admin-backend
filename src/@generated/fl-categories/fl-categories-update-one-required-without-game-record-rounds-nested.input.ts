import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { fl_categoriesCreateWithoutGame_record_roundsInput } from './fl-categories-create-without-game-record-rounds.input';
import { Type } from 'class-transformer';
import { fl_categoriesCreateOrConnectWithoutGame_record_roundsInput } from './fl-categories-create-or-connect-without-game-record-rounds.input';
import { fl_categoriesUpsertWithoutGame_record_roundsInput } from './fl-categories-upsert-without-game-record-rounds.input';
import { fl_categoriesWhereUniqueInput } from './fl-categories-where-unique.input';
import { fl_categoriesUpdateToOneWithWhereWithoutGame_record_roundsInput } from './fl-categories-update-to-one-with-where-without-game-record-rounds.input';

@InputType()
export class fl_categoriesUpdateOneRequiredWithoutGame_record_roundsNestedInput {

    @Field(() => fl_categoriesCreateWithoutGame_record_roundsInput, {nullable:true})
    @Type(() => fl_categoriesCreateWithoutGame_record_roundsInput)
    create?: fl_categoriesCreateWithoutGame_record_roundsInput;

    @Field(() => fl_categoriesCreateOrConnectWithoutGame_record_roundsInput, {nullable:true})
    @Type(() => fl_categoriesCreateOrConnectWithoutGame_record_roundsInput)
    connectOrCreate?: fl_categoriesCreateOrConnectWithoutGame_record_roundsInput;

    @Field(() => fl_categoriesUpsertWithoutGame_record_roundsInput, {nullable:true})
    @Type(() => fl_categoriesUpsertWithoutGame_record_roundsInput)
    upsert?: fl_categoriesUpsertWithoutGame_record_roundsInput;

    @Field(() => fl_categoriesWhereUniqueInput, {nullable:true})
    @Type(() => fl_categoriesWhereUniqueInput)
    connect?: fl_categoriesWhereUniqueInput;

    @Field(() => fl_categoriesUpdateToOneWithWhereWithoutGame_record_roundsInput, {nullable:true})
    @Type(() => fl_categoriesUpdateToOneWithWhereWithoutGame_record_roundsInput)
    update?: fl_categoriesUpdateToOneWithWhereWithoutGame_record_roundsInput;
}
