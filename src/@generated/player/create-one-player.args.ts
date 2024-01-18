import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlayerCreateInput } from './player-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePlayerArgs {

    @Field(() => PlayerCreateInput, {nullable:false})
    @Type(() => PlayerCreateInput)
    data!: PlayerCreateInput;
}
