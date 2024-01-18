import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersUpdateWithoutPlayer_walletsInput } from './players-update-without-player-wallets.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutPlayer_walletsInput } from './players-create-without-player-wallets.input';
import { playersWhereInput } from './players-where.input';

@InputType()
export class playersUpsertWithoutPlayer_walletsInput {

    @Field(() => playersUpdateWithoutPlayer_walletsInput, {nullable:false})
    @Type(() => playersUpdateWithoutPlayer_walletsInput)
    update!: playersUpdateWithoutPlayer_walletsInput;

    @Field(() => playersCreateWithoutPlayer_walletsInput, {nullable:false})
    @Type(() => playersCreateWithoutPlayer_walletsInput)
    create!: playersCreateWithoutPlayer_walletsInput;

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;
}
