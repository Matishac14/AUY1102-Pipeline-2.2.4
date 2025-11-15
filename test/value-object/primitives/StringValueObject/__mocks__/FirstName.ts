// In test/value-object/primitives/StringValueObject/__mocks__/FirstName.ts
import { StringValueObject } from 'pkg-value-object/src'; // or correct relative import

export default class FirstName extends StringValueObject {
  constructor(firstName: string) {
    super(firstName);
  }
}