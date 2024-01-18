import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_rebatesCreateInput } from '../game-rebates/game-rebates-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnegameRebatesArgs {

    @Field(() => game_rebatesCreateInput, {nullable:false})
    @Type(() => game_rebatesCreateInput)
    data!: game_rebatesCreateInput;
}
