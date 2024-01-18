import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameRebateCreateManyInput } from './game-rebate-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyGameRebateArgs {

    @Field(() => [GameRebateCreateManyInput], {nullable:false})
    @Type(() => GameRebateCreateManyInput)
    data!: Array<GameRebateCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
