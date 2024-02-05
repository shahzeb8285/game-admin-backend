import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_record_roundsCreateManyCategoryInput } from './game-record-rounds-create-many-category.input';
import { Type } from 'class-transformer';

@InputType()
export class game_record_roundsCreateManyCategoryInputEnvelope {

    @Field(() => [game_record_roundsCreateManyCategoryInput], {nullable:false})
    @Type(() => game_record_roundsCreateManyCategoryInput)
    data!: Array<game_record_roundsCreateManyCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
