import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Game_actionsCountAggregate } from './game-actions-count-aggregate.output';
import { Game_actionsMinAggregate } from './game-actions-min-aggregate.output';
import { Game_actionsMaxAggregate } from './game-actions-max-aggregate.output';

@ObjectType()
export class AggregateGame_actions {

    @Field(() => Game_actionsCountAggregate, {nullable:true})
    _count?: Game_actionsCountAggregate;

    @Field(() => Game_actionsMinAggregate, {nullable:true})
    _min?: Game_actionsMinAggregate;

    @Field(() => Game_actionsMaxAggregate, {nullable:true})
    _max?: Game_actionsMaxAggregate;
}
