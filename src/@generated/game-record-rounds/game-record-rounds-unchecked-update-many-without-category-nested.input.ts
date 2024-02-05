import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsCreateWithoutCategoryInput } from './game-record-rounds-create-without-category.input';
import { Type } from 'class-transformer';
import { game_record_roundsCreateOrConnectWithoutCategoryInput } from './game-record-rounds-create-or-connect-without-category.input';
import { game_record_roundsUpsertWithWhereUniqueWithoutCategoryInput } from './game-record-rounds-upsert-with-where-unique-without-category.input';
import { game_record_roundsCreateManyCategoryInputEnvelope } from './game-record-rounds-create-many-category-input-envelope.input';
import { game_record_roundsWhereUniqueInput } from './game-record-rounds-where-unique.input';
import { game_record_roundsUpdateWithWhereUniqueWithoutCategoryInput } from './game-record-rounds-update-with-where-unique-without-category.input';
import { game_record_roundsUpdateManyWithWhereWithoutCategoryInput } from './game-record-rounds-update-many-with-where-without-category.input';
import { game_record_roundsScalarWhereInput } from './game-record-rounds-scalar-where.input';

@InputType()
export class game_record_roundsUncheckedUpdateManyWithoutCategoryNestedInput {

    @Field(() => [game_record_roundsCreateWithoutCategoryInput], {nullable:true})
    @Type(() => game_record_roundsCreateWithoutCategoryInput)
    create?: Array<game_record_roundsCreateWithoutCategoryInput>;

    @Field(() => [game_record_roundsCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => game_record_roundsCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<game_record_roundsCreateOrConnectWithoutCategoryInput>;

    @Field(() => [game_record_roundsUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => game_record_roundsUpsertWithWhereUniqueWithoutCategoryInput)
    upsert?: Array<game_record_roundsUpsertWithWhereUniqueWithoutCategoryInput>;

    @Field(() => game_record_roundsCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => game_record_roundsCreateManyCategoryInputEnvelope)
    createMany?: game_record_roundsCreateManyCategoryInputEnvelope;

    @Field(() => [game_record_roundsWhereUniqueInput], {nullable:true})
    @Type(() => game_record_roundsWhereUniqueInput)
    set?: Array<game_record_roundsWhereUniqueInput>;

    @Field(() => [game_record_roundsWhereUniqueInput], {nullable:true})
    @Type(() => game_record_roundsWhereUniqueInput)
    disconnect?: Array<game_record_roundsWhereUniqueInput>;

    @Field(() => [game_record_roundsWhereUniqueInput], {nullable:true})
    @Type(() => game_record_roundsWhereUniqueInput)
    delete?: Array<game_record_roundsWhereUniqueInput>;

    @Field(() => [game_record_roundsWhereUniqueInput], {nullable:true})
    @Type(() => game_record_roundsWhereUniqueInput)
    connect?: Array<game_record_roundsWhereUniqueInput>;

    @Field(() => [game_record_roundsUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => game_record_roundsUpdateWithWhereUniqueWithoutCategoryInput)
    update?: Array<game_record_roundsUpdateWithWhereUniqueWithoutCategoryInput>;

    @Field(() => [game_record_roundsUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    @Type(() => game_record_roundsUpdateManyWithWhereWithoutCategoryInput)
    updateMany?: Array<game_record_roundsUpdateManyWithWhereWithoutCategoryInput>;

    @Field(() => [game_record_roundsScalarWhereInput], {nullable:true})
    @Type(() => game_record_roundsScalarWhereInput)
    deleteMany?: Array<game_record_roundsScalarWhereInput>;
}
