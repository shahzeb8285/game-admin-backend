import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manual_adjustmentsCreateManyPlayersInput } from './manual-adjustments-create-many-players.input';
import { Type } from 'class-transformer';

@InputType()
export class manual_adjustmentsCreateManyPlayersInputEnvelope {

    @Field(() => [manual_adjustmentsCreateManyPlayersInput], {nullable:false})
    @Type(() => manual_adjustmentsCreateManyPlayersInput)
    data!: Array<manual_adjustmentsCreateManyPlayersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
