import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsCreateWithoutCategoryInput } from './game-record-rounds-create-without-category.input';
import { Type } from 'class-transformer';
import { game_record_roundsCreateOrConnectWithoutCategoryInput } from './game-record-rounds-create-or-connect-without-category.input';
import { game_record_roundsCreateManyCategoryInputEnvelope } from './game-record-rounds-create-many-category-input-envelope.input';
import { game_record_roundsWhereUniqueInput } from './game-record-rounds-where-unique.input';

@InputType()
export class game_record_roundsUncheckedCreateNestedManyWithoutCategoryInput {

    @Field(() => [game_record_roundsCreateWithoutCategoryInput], {nullable:true})
    @Type(() => game_record_roundsCreateWithoutCategoryInput)
    create?: Array<game_record_roundsCreateWithoutCategoryInput>;

    @Field(() => [game_record_roundsCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => game_record_roundsCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<game_record_roundsCreateOrConnectWithoutCategoryInput>;

    @Field(() => game_record_roundsCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => game_record_roundsCreateManyCategoryInputEnvelope)
    createMany?: game_record_roundsCreateManyCategoryInputEnvelope;

    @Field(() => [game_record_roundsWhereUniqueInput], {nullable:true})
    @Type(() => game_record_roundsWhereUniqueInput)
    connect?: Array<game_record_roundsWhereUniqueInput>;
}
