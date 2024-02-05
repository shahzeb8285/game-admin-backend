import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { sg_merchantsWhereInput } from './sg-merchants-where.input';
import { Type } from 'class-transformer';
import { sg_merchantsUpdateWithoutSg_gamesInput } from './sg-merchants-update-without-sg-games.input';

@InputType()
export class sg_merchantsUpdateToOneWithWhereWithoutSg_gamesInput {

    @Field(() => sg_merchantsWhereInput, {nullable:true})
    @Type(() => sg_merchantsWhereInput)
    where?: sg_merchantsWhereInput;

    @Field(() => sg_merchantsUpdateWithoutSg_gamesInput, {nullable:false})
    @Type(() => sg_merchantsUpdateWithoutSg_gamesInput)
    data!: sg_merchantsUpdateWithoutSg_gamesInput;
}
