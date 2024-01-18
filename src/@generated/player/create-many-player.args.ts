import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlayerCreateManyInput } from './player-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPlayerArgs {

    @Field(() => [PlayerCreateManyInput], {nullable:false})
    @Type(() => PlayerCreateManyInput)
    data!: Array<PlayerCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
