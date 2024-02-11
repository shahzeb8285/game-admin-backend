import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereInput } from './players-where.input';
import { Type } from 'class-transformer';
import { playersUpdateWithoutPlayer_walletsInput } from './players-update-without-player-wallets.input';

@InputType()
export class playersUpdateToOneWithWhereWithoutPlayer_walletsInput {

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;

    @Field(() => playersUpdateWithoutPlayer_walletsInput, {nullable:false})
    @Type(() => playersUpdateWithoutPlayer_walletsInput)
    data!: playersUpdateWithoutPlayer_walletsInput;
}
