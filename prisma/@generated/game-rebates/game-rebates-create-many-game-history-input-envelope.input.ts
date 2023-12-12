import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_rebatesCreateManyGame_historyInput } from './game-rebates-create-many-game-history.input';
import { Type } from 'class-transformer';

@InputType()
export class game_rebatesCreateManyGame_historyInputEnvelope {

    @Field(() => [game_rebatesCreateManyGame_historyInput], {nullable:false})
    @Type(() => game_rebatesCreateManyGame_historyInput)
    data!: Array<game_rebatesCreateManyGame_historyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
