import { InputType, Int, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class CreateBankAccountInput {
  @Field(() => String, { nullable: false })
  bank_name!: string;

  @Field(() => String, { nullable: false })
  account_number!: string;

  @Field(() => String, { nullable: false })
  holder_name!: string;

  @Field(() => Boolean, { nullable: true })
  enabled?: boolean;

  @Field(() => String, { nullable: false })
  method!: string;
}

@InputType()
export class UpdateBankAccountInput extends PartialType(
  CreateBankAccountInput,
) {
  @Field(() => String, { nullable: false })
  admin_bank_account_id?: string;

  @Field(() => String, { nullable: true })
  bank_name!: string;

  @Field(() => String, { nullable: true })
  account_number!: string;

  @Field(() => String, { nullable: true })
  holder_name!: string;
}
