
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Ejercicio
 * 
 */
export type Ejercicio = $Result.DefaultSelection<Prisma.$EjercicioPayload>
/**
 * Model Rutina
 * 
 */
export type Rutina = $Result.DefaultSelection<Prisma.$RutinaPayload>
/**
 * Model RutinaEjercicio
 * 
 */
export type RutinaEjercicio = $Result.DefaultSelection<Prisma.$RutinaEjercicioPayload>
/**
 * Model AsignacionRutina
 * 
 */
export type AsignacionRutina = $Result.DefaultSelection<Prisma.$AsignacionRutinaPayload>
/**
 * Model RegistroProgreso
 * 
 */
export type RegistroProgreso = $Result.DefaultSelection<Prisma.$RegistroProgresoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Ejercicios
 * const ejercicios = await prisma.ejercicio.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Ejercicios
   * const ejercicios = await prisma.ejercicio.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.ejercicio`: Exposes CRUD operations for the **Ejercicio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ejercicios
    * const ejercicios = await prisma.ejercicio.findMany()
    * ```
    */
  get ejercicio(): Prisma.EjercicioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rutina`: Exposes CRUD operations for the **Rutina** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rutinas
    * const rutinas = await prisma.rutina.findMany()
    * ```
    */
  get rutina(): Prisma.RutinaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rutinaEjercicio`: Exposes CRUD operations for the **RutinaEjercicio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RutinaEjercicios
    * const rutinaEjercicios = await prisma.rutinaEjercicio.findMany()
    * ```
    */
  get rutinaEjercicio(): Prisma.RutinaEjercicioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.asignacionRutina`: Exposes CRUD operations for the **AsignacionRutina** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AsignacionRutinas
    * const asignacionRutinas = await prisma.asignacionRutina.findMany()
    * ```
    */
  get asignacionRutina(): Prisma.AsignacionRutinaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registroProgreso`: Exposes CRUD operations for the **RegistroProgreso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegistroProgresos
    * const registroProgresos = await prisma.registroProgreso.findMany()
    * ```
    */
  get registroProgreso(): Prisma.RegistroProgresoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Ejercicio: 'Ejercicio',
    Rutina: 'Rutina',
    RutinaEjercicio: 'RutinaEjercicio',
    AsignacionRutina: 'AsignacionRutina',
    RegistroProgreso: 'RegistroProgreso'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "ejercicio" | "rutina" | "rutinaEjercicio" | "asignacionRutina" | "registroProgreso"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Ejercicio: {
        payload: Prisma.$EjercicioPayload<ExtArgs>
        fields: Prisma.EjercicioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EjercicioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EjercicioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>
          }
          findFirst: {
            args: Prisma.EjercicioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EjercicioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>
          }
          findMany: {
            args: Prisma.EjercicioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>[]
          }
          create: {
            args: Prisma.EjercicioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>
          }
          createMany: {
            args: Prisma.EjercicioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EjercicioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>[]
          }
          delete: {
            args: Prisma.EjercicioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>
          }
          update: {
            args: Prisma.EjercicioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>
          }
          deleteMany: {
            args: Prisma.EjercicioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EjercicioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EjercicioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>[]
          }
          upsert: {
            args: Prisma.EjercicioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>
          }
          aggregate: {
            args: Prisma.EjercicioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEjercicio>
          }
          groupBy: {
            args: Prisma.EjercicioGroupByArgs<ExtArgs>
            result: $Utils.Optional<EjercicioGroupByOutputType>[]
          }
          count: {
            args: Prisma.EjercicioCountArgs<ExtArgs>
            result: $Utils.Optional<EjercicioCountAggregateOutputType> | number
          }
        }
      }
      Rutina: {
        payload: Prisma.$RutinaPayload<ExtArgs>
        fields: Prisma.RutinaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RutinaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RutinaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>
          }
          findFirst: {
            args: Prisma.RutinaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RutinaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>
          }
          findMany: {
            args: Prisma.RutinaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>[]
          }
          create: {
            args: Prisma.RutinaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>
          }
          createMany: {
            args: Prisma.RutinaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RutinaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>[]
          }
          delete: {
            args: Prisma.RutinaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>
          }
          update: {
            args: Prisma.RutinaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>
          }
          deleteMany: {
            args: Prisma.RutinaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RutinaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RutinaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>[]
          }
          upsert: {
            args: Prisma.RutinaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>
          }
          aggregate: {
            args: Prisma.RutinaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRutina>
          }
          groupBy: {
            args: Prisma.RutinaGroupByArgs<ExtArgs>
            result: $Utils.Optional<RutinaGroupByOutputType>[]
          }
          count: {
            args: Prisma.RutinaCountArgs<ExtArgs>
            result: $Utils.Optional<RutinaCountAggregateOutputType> | number
          }
        }
      }
      RutinaEjercicio: {
        payload: Prisma.$RutinaEjercicioPayload<ExtArgs>
        fields: Prisma.RutinaEjercicioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RutinaEjercicioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RutinaEjercicioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload>
          }
          findFirst: {
            args: Prisma.RutinaEjercicioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RutinaEjercicioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload>
          }
          findMany: {
            args: Prisma.RutinaEjercicioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload>[]
          }
          create: {
            args: Prisma.RutinaEjercicioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload>
          }
          createMany: {
            args: Prisma.RutinaEjercicioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RutinaEjercicioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload>[]
          }
          delete: {
            args: Prisma.RutinaEjercicioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload>
          }
          update: {
            args: Prisma.RutinaEjercicioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload>
          }
          deleteMany: {
            args: Prisma.RutinaEjercicioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RutinaEjercicioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RutinaEjercicioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload>[]
          }
          upsert: {
            args: Prisma.RutinaEjercicioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload>
          }
          aggregate: {
            args: Prisma.RutinaEjercicioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRutinaEjercicio>
          }
          groupBy: {
            args: Prisma.RutinaEjercicioGroupByArgs<ExtArgs>
            result: $Utils.Optional<RutinaEjercicioGroupByOutputType>[]
          }
          count: {
            args: Prisma.RutinaEjercicioCountArgs<ExtArgs>
            result: $Utils.Optional<RutinaEjercicioCountAggregateOutputType> | number
          }
        }
      }
      AsignacionRutina: {
        payload: Prisma.$AsignacionRutinaPayload<ExtArgs>
        fields: Prisma.AsignacionRutinaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AsignacionRutinaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionRutinaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AsignacionRutinaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionRutinaPayload>
          }
          findFirst: {
            args: Prisma.AsignacionRutinaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionRutinaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AsignacionRutinaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionRutinaPayload>
          }
          findMany: {
            args: Prisma.AsignacionRutinaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionRutinaPayload>[]
          }
          create: {
            args: Prisma.AsignacionRutinaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionRutinaPayload>
          }
          createMany: {
            args: Prisma.AsignacionRutinaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AsignacionRutinaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionRutinaPayload>[]
          }
          delete: {
            args: Prisma.AsignacionRutinaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionRutinaPayload>
          }
          update: {
            args: Prisma.AsignacionRutinaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionRutinaPayload>
          }
          deleteMany: {
            args: Prisma.AsignacionRutinaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AsignacionRutinaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AsignacionRutinaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionRutinaPayload>[]
          }
          upsert: {
            args: Prisma.AsignacionRutinaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionRutinaPayload>
          }
          aggregate: {
            args: Prisma.AsignacionRutinaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsignacionRutina>
          }
          groupBy: {
            args: Prisma.AsignacionRutinaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AsignacionRutinaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AsignacionRutinaCountArgs<ExtArgs>
            result: $Utils.Optional<AsignacionRutinaCountAggregateOutputType> | number
          }
        }
      }
      RegistroProgreso: {
        payload: Prisma.$RegistroProgresoPayload<ExtArgs>
        fields: Prisma.RegistroProgresoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistroProgresoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroProgresoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistroProgresoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroProgresoPayload>
          }
          findFirst: {
            args: Prisma.RegistroProgresoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroProgresoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistroProgresoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroProgresoPayload>
          }
          findMany: {
            args: Prisma.RegistroProgresoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroProgresoPayload>[]
          }
          create: {
            args: Prisma.RegistroProgresoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroProgresoPayload>
          }
          createMany: {
            args: Prisma.RegistroProgresoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegistroProgresoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroProgresoPayload>[]
          }
          delete: {
            args: Prisma.RegistroProgresoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroProgresoPayload>
          }
          update: {
            args: Prisma.RegistroProgresoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroProgresoPayload>
          }
          deleteMany: {
            args: Prisma.RegistroProgresoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistroProgresoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegistroProgresoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroProgresoPayload>[]
          }
          upsert: {
            args: Prisma.RegistroProgresoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroProgresoPayload>
          }
          aggregate: {
            args: Prisma.RegistroProgresoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistroProgreso>
          }
          groupBy: {
            args: Prisma.RegistroProgresoGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistroProgresoGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistroProgresoCountArgs<ExtArgs>
            result: $Utils.Optional<RegistroProgresoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    ejercicio?: EjercicioOmit
    rutina?: RutinaOmit
    rutinaEjercicio?: RutinaEjercicioOmit
    asignacionRutina?: AsignacionRutinaOmit
    registroProgreso?: RegistroProgresoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EjercicioCountOutputType
   */

  export type EjercicioCountOutputType = {
    rutinaEjercicios: number
    registrosProgreso: number
  }

  export type EjercicioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutinaEjercicios?: boolean | EjercicioCountOutputTypeCountRutinaEjerciciosArgs
    registrosProgreso?: boolean | EjercicioCountOutputTypeCountRegistrosProgresoArgs
  }

  // Custom InputTypes
  /**
   * EjercicioCountOutputType without action
   */
  export type EjercicioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EjercicioCountOutputType
     */
    select?: EjercicioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EjercicioCountOutputType without action
   */
  export type EjercicioCountOutputTypeCountRutinaEjerciciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RutinaEjercicioWhereInput
  }

  /**
   * EjercicioCountOutputType without action
   */
  export type EjercicioCountOutputTypeCountRegistrosProgresoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroProgresoWhereInput
  }


  /**
   * Count Type RutinaCountOutputType
   */

  export type RutinaCountOutputType = {
    ejercicios: number
    asignaciones: number
  }

  export type RutinaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ejercicios?: boolean | RutinaCountOutputTypeCountEjerciciosArgs
    asignaciones?: boolean | RutinaCountOutputTypeCountAsignacionesArgs
  }

  // Custom InputTypes
  /**
   * RutinaCountOutputType without action
   */
  export type RutinaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaCountOutputType
     */
    select?: RutinaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RutinaCountOutputType without action
   */
  export type RutinaCountOutputTypeCountEjerciciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RutinaEjercicioWhereInput
  }

  /**
   * RutinaCountOutputType without action
   */
  export type RutinaCountOutputTypeCountAsignacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsignacionRutinaWhereInput
  }


  /**
   * Count Type AsignacionRutinaCountOutputType
   */

  export type AsignacionRutinaCountOutputType = {
    registros: number
  }

  export type AsignacionRutinaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registros?: boolean | AsignacionRutinaCountOutputTypeCountRegistrosArgs
  }

  // Custom InputTypes
  /**
   * AsignacionRutinaCountOutputType without action
   */
  export type AsignacionRutinaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionRutinaCountOutputType
     */
    select?: AsignacionRutinaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AsignacionRutinaCountOutputType without action
   */
  export type AsignacionRutinaCountOutputTypeCountRegistrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroProgresoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Ejercicio
   */

  export type AggregateEjercicio = {
    _count: EjercicioCountAggregateOutputType | null
    _min: EjercicioMinAggregateOutputType | null
    _max: EjercicioMaxAggregateOutputType | null
  }

  export type EjercicioMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
    musculoObjetivo: string | null
    urlVideo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EjercicioMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
    musculoObjetivo: string | null
    urlVideo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EjercicioCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    musculoObjetivo: number
    urlVideo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EjercicioMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    musculoObjetivo?: true
    urlVideo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EjercicioMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    musculoObjetivo?: true
    urlVideo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EjercicioCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    musculoObjetivo?: true
    urlVideo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EjercicioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ejercicio to aggregate.
     */
    where?: EjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ejercicios to fetch.
     */
    orderBy?: EjercicioOrderByWithRelationInput | EjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ejercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ejercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ejercicios
    **/
    _count?: true | EjercicioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EjercicioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EjercicioMaxAggregateInputType
  }

  export type GetEjercicioAggregateType<T extends EjercicioAggregateArgs> = {
        [P in keyof T & keyof AggregateEjercicio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEjercicio[P]>
      : GetScalarType<T[P], AggregateEjercicio[P]>
  }




  export type EjercicioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EjercicioWhereInput
    orderBy?: EjercicioOrderByWithAggregationInput | EjercicioOrderByWithAggregationInput[]
    by: EjercicioScalarFieldEnum[] | EjercicioScalarFieldEnum
    having?: EjercicioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EjercicioCountAggregateInputType | true
    _min?: EjercicioMinAggregateInputType
    _max?: EjercicioMaxAggregateInputType
  }

  export type EjercicioGroupByOutputType = {
    id: string
    nombre: string
    descripcion: string
    musculoObjetivo: string
    urlVideo: string | null
    createdAt: Date
    updatedAt: Date
    _count: EjercicioCountAggregateOutputType | null
    _min: EjercicioMinAggregateOutputType | null
    _max: EjercicioMaxAggregateOutputType | null
  }

  type GetEjercicioGroupByPayload<T extends EjercicioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EjercicioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EjercicioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EjercicioGroupByOutputType[P]>
            : GetScalarType<T[P], EjercicioGroupByOutputType[P]>
        }
      >
    >


  export type EjercicioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    musculoObjetivo?: boolean
    urlVideo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rutinaEjercicios?: boolean | Ejercicio$rutinaEjerciciosArgs<ExtArgs>
    registrosProgreso?: boolean | Ejercicio$registrosProgresoArgs<ExtArgs>
    _count?: boolean | EjercicioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ejercicio"]>

  export type EjercicioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    musculoObjetivo?: boolean
    urlVideo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ejercicio"]>

  export type EjercicioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    musculoObjetivo?: boolean
    urlVideo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ejercicio"]>

  export type EjercicioSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    musculoObjetivo?: boolean
    urlVideo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EjercicioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "musculoObjetivo" | "urlVideo" | "createdAt" | "updatedAt", ExtArgs["result"]["ejercicio"]>
  export type EjercicioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutinaEjercicios?: boolean | Ejercicio$rutinaEjerciciosArgs<ExtArgs>
    registrosProgreso?: boolean | Ejercicio$registrosProgresoArgs<ExtArgs>
    _count?: boolean | EjercicioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EjercicioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EjercicioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EjercicioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ejercicio"
    objects: {
      rutinaEjercicios: Prisma.$RutinaEjercicioPayload<ExtArgs>[]
      registrosProgreso: Prisma.$RegistroProgresoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      descripcion: string
      musculoObjetivo: string
      urlVideo: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ejercicio"]>
    composites: {}
  }

  type EjercicioGetPayload<S extends boolean | null | undefined | EjercicioDefaultArgs> = $Result.GetResult<Prisma.$EjercicioPayload, S>

  type EjercicioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EjercicioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EjercicioCountAggregateInputType | true
    }

  export interface EjercicioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ejercicio'], meta: { name: 'Ejercicio' } }
    /**
     * Find zero or one Ejercicio that matches the filter.
     * @param {EjercicioFindUniqueArgs} args - Arguments to find a Ejercicio
     * @example
     * // Get one Ejercicio
     * const ejercicio = await prisma.ejercicio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EjercicioFindUniqueArgs>(args: SelectSubset<T, EjercicioFindUniqueArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ejercicio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EjercicioFindUniqueOrThrowArgs} args - Arguments to find a Ejercicio
     * @example
     * // Get one Ejercicio
     * const ejercicio = await prisma.ejercicio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EjercicioFindUniqueOrThrowArgs>(args: SelectSubset<T, EjercicioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ejercicio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioFindFirstArgs} args - Arguments to find a Ejercicio
     * @example
     * // Get one Ejercicio
     * const ejercicio = await prisma.ejercicio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EjercicioFindFirstArgs>(args?: SelectSubset<T, EjercicioFindFirstArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ejercicio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioFindFirstOrThrowArgs} args - Arguments to find a Ejercicio
     * @example
     * // Get one Ejercicio
     * const ejercicio = await prisma.ejercicio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EjercicioFindFirstOrThrowArgs>(args?: SelectSubset<T, EjercicioFindFirstOrThrowArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ejercicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ejercicios
     * const ejercicios = await prisma.ejercicio.findMany()
     * 
     * // Get first 10 Ejercicios
     * const ejercicios = await prisma.ejercicio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ejercicioWithIdOnly = await prisma.ejercicio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EjercicioFindManyArgs>(args?: SelectSubset<T, EjercicioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ejercicio.
     * @param {EjercicioCreateArgs} args - Arguments to create a Ejercicio.
     * @example
     * // Create one Ejercicio
     * const Ejercicio = await prisma.ejercicio.create({
     *   data: {
     *     // ... data to create a Ejercicio
     *   }
     * })
     * 
     */
    create<T extends EjercicioCreateArgs>(args: SelectSubset<T, EjercicioCreateArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ejercicios.
     * @param {EjercicioCreateManyArgs} args - Arguments to create many Ejercicios.
     * @example
     * // Create many Ejercicios
     * const ejercicio = await prisma.ejercicio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EjercicioCreateManyArgs>(args?: SelectSubset<T, EjercicioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ejercicios and returns the data saved in the database.
     * @param {EjercicioCreateManyAndReturnArgs} args - Arguments to create many Ejercicios.
     * @example
     * // Create many Ejercicios
     * const ejercicio = await prisma.ejercicio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ejercicios and only return the `id`
     * const ejercicioWithIdOnly = await prisma.ejercicio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EjercicioCreateManyAndReturnArgs>(args?: SelectSubset<T, EjercicioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ejercicio.
     * @param {EjercicioDeleteArgs} args - Arguments to delete one Ejercicio.
     * @example
     * // Delete one Ejercicio
     * const Ejercicio = await prisma.ejercicio.delete({
     *   where: {
     *     // ... filter to delete one Ejercicio
     *   }
     * })
     * 
     */
    delete<T extends EjercicioDeleteArgs>(args: SelectSubset<T, EjercicioDeleteArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ejercicio.
     * @param {EjercicioUpdateArgs} args - Arguments to update one Ejercicio.
     * @example
     * // Update one Ejercicio
     * const ejercicio = await prisma.ejercicio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EjercicioUpdateArgs>(args: SelectSubset<T, EjercicioUpdateArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ejercicios.
     * @param {EjercicioDeleteManyArgs} args - Arguments to filter Ejercicios to delete.
     * @example
     * // Delete a few Ejercicios
     * const { count } = await prisma.ejercicio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EjercicioDeleteManyArgs>(args?: SelectSubset<T, EjercicioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ejercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ejercicios
     * const ejercicio = await prisma.ejercicio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EjercicioUpdateManyArgs>(args: SelectSubset<T, EjercicioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ejercicios and returns the data updated in the database.
     * @param {EjercicioUpdateManyAndReturnArgs} args - Arguments to update many Ejercicios.
     * @example
     * // Update many Ejercicios
     * const ejercicio = await prisma.ejercicio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ejercicios and only return the `id`
     * const ejercicioWithIdOnly = await prisma.ejercicio.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EjercicioUpdateManyAndReturnArgs>(args: SelectSubset<T, EjercicioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ejercicio.
     * @param {EjercicioUpsertArgs} args - Arguments to update or create a Ejercicio.
     * @example
     * // Update or create a Ejercicio
     * const ejercicio = await prisma.ejercicio.upsert({
     *   create: {
     *     // ... data to create a Ejercicio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ejercicio we want to update
     *   }
     * })
     */
    upsert<T extends EjercicioUpsertArgs>(args: SelectSubset<T, EjercicioUpsertArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ejercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioCountArgs} args - Arguments to filter Ejercicios to count.
     * @example
     * // Count the number of Ejercicios
     * const count = await prisma.ejercicio.count({
     *   where: {
     *     // ... the filter for the Ejercicios we want to count
     *   }
     * })
    **/
    count<T extends EjercicioCountArgs>(
      args?: Subset<T, EjercicioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EjercicioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ejercicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EjercicioAggregateArgs>(args: Subset<T, EjercicioAggregateArgs>): Prisma.PrismaPromise<GetEjercicioAggregateType<T>>

    /**
     * Group by Ejercicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EjercicioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EjercicioGroupByArgs['orderBy'] }
        : { orderBy?: EjercicioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EjercicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEjercicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ejercicio model
   */
  readonly fields: EjercicioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ejercicio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EjercicioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rutinaEjercicios<T extends Ejercicio$rutinaEjerciciosArgs<ExtArgs> = {}>(args?: Subset<T, Ejercicio$rutinaEjerciciosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    registrosProgreso<T extends Ejercicio$registrosProgresoArgs<ExtArgs> = {}>(args?: Subset<T, Ejercicio$registrosProgresoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroProgresoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ejercicio model
   */
  interface EjercicioFieldRefs {
    readonly id: FieldRef<"Ejercicio", 'String'>
    readonly nombre: FieldRef<"Ejercicio", 'String'>
    readonly descripcion: FieldRef<"Ejercicio", 'String'>
    readonly musculoObjetivo: FieldRef<"Ejercicio", 'String'>
    readonly urlVideo: FieldRef<"Ejercicio", 'String'>
    readonly createdAt: FieldRef<"Ejercicio", 'DateTime'>
    readonly updatedAt: FieldRef<"Ejercicio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ejercicio findUnique
   */
  export type EjercicioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * Filter, which Ejercicio to fetch.
     */
    where: EjercicioWhereUniqueInput
  }

  /**
   * Ejercicio findUniqueOrThrow
   */
  export type EjercicioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * Filter, which Ejercicio to fetch.
     */
    where: EjercicioWhereUniqueInput
  }

  /**
   * Ejercicio findFirst
   */
  export type EjercicioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * Filter, which Ejercicio to fetch.
     */
    where?: EjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ejercicios to fetch.
     */
    orderBy?: EjercicioOrderByWithRelationInput | EjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ejercicios.
     */
    cursor?: EjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ejercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ejercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ejercicios.
     */
    distinct?: EjercicioScalarFieldEnum | EjercicioScalarFieldEnum[]
  }

  /**
   * Ejercicio findFirstOrThrow
   */
  export type EjercicioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * Filter, which Ejercicio to fetch.
     */
    where?: EjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ejercicios to fetch.
     */
    orderBy?: EjercicioOrderByWithRelationInput | EjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ejercicios.
     */
    cursor?: EjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ejercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ejercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ejercicios.
     */
    distinct?: EjercicioScalarFieldEnum | EjercicioScalarFieldEnum[]
  }

  /**
   * Ejercicio findMany
   */
  export type EjercicioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * Filter, which Ejercicios to fetch.
     */
    where?: EjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ejercicios to fetch.
     */
    orderBy?: EjercicioOrderByWithRelationInput | EjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ejercicios.
     */
    cursor?: EjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ejercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ejercicios.
     */
    skip?: number
    distinct?: EjercicioScalarFieldEnum | EjercicioScalarFieldEnum[]
  }

  /**
   * Ejercicio create
   */
  export type EjercicioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * The data needed to create a Ejercicio.
     */
    data: XOR<EjercicioCreateInput, EjercicioUncheckedCreateInput>
  }

  /**
   * Ejercicio createMany
   */
  export type EjercicioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ejercicios.
     */
    data: EjercicioCreateManyInput | EjercicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ejercicio createManyAndReturn
   */
  export type EjercicioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * The data used to create many Ejercicios.
     */
    data: EjercicioCreateManyInput | EjercicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ejercicio update
   */
  export type EjercicioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * The data needed to update a Ejercicio.
     */
    data: XOR<EjercicioUpdateInput, EjercicioUncheckedUpdateInput>
    /**
     * Choose, which Ejercicio to update.
     */
    where: EjercicioWhereUniqueInput
  }

  /**
   * Ejercicio updateMany
   */
  export type EjercicioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ejercicios.
     */
    data: XOR<EjercicioUpdateManyMutationInput, EjercicioUncheckedUpdateManyInput>
    /**
     * Filter which Ejercicios to update
     */
    where?: EjercicioWhereInput
    /**
     * Limit how many Ejercicios to update.
     */
    limit?: number
  }

  /**
   * Ejercicio updateManyAndReturn
   */
  export type EjercicioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * The data used to update Ejercicios.
     */
    data: XOR<EjercicioUpdateManyMutationInput, EjercicioUncheckedUpdateManyInput>
    /**
     * Filter which Ejercicios to update
     */
    where?: EjercicioWhereInput
    /**
     * Limit how many Ejercicios to update.
     */
    limit?: number
  }

  /**
   * Ejercicio upsert
   */
  export type EjercicioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * The filter to search for the Ejercicio to update in case it exists.
     */
    where: EjercicioWhereUniqueInput
    /**
     * In case the Ejercicio found by the `where` argument doesn't exist, create a new Ejercicio with this data.
     */
    create: XOR<EjercicioCreateInput, EjercicioUncheckedCreateInput>
    /**
     * In case the Ejercicio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EjercicioUpdateInput, EjercicioUncheckedUpdateInput>
  }

  /**
   * Ejercicio delete
   */
  export type EjercicioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * Filter which Ejercicio to delete.
     */
    where: EjercicioWhereUniqueInput
  }

  /**
   * Ejercicio deleteMany
   */
  export type EjercicioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ejercicios to delete
     */
    where?: EjercicioWhereInput
    /**
     * Limit how many Ejercicios to delete.
     */
    limit?: number
  }

  /**
   * Ejercicio.rutinaEjercicios
   */
  export type Ejercicio$rutinaEjerciciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    where?: RutinaEjercicioWhereInput
    orderBy?: RutinaEjercicioOrderByWithRelationInput | RutinaEjercicioOrderByWithRelationInput[]
    cursor?: RutinaEjercicioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RutinaEjercicioScalarFieldEnum | RutinaEjercicioScalarFieldEnum[]
  }

  /**
   * Ejercicio.registrosProgreso
   */
  export type Ejercicio$registrosProgresoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroProgreso
     */
    select?: RegistroProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroProgreso
     */
    omit?: RegistroProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroProgresoInclude<ExtArgs> | null
    where?: RegistroProgresoWhereInput
    orderBy?: RegistroProgresoOrderByWithRelationInput | RegistroProgresoOrderByWithRelationInput[]
    cursor?: RegistroProgresoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistroProgresoScalarFieldEnum | RegistroProgresoScalarFieldEnum[]
  }

  /**
   * Ejercicio without action
   */
  export type EjercicioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
  }


  /**
   * Model Rutina
   */

  export type AggregateRutina = {
    _count: RutinaCountAggregateOutputType | null
    _min: RutinaMinAggregateOutputType | null
    _max: RutinaMaxAggregateOutputType | null
  }

  export type RutinaMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    creadorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RutinaMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    creadorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RutinaCountAggregateOutputType = {
    id: number
    nombre: number
    creadorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RutinaMinAggregateInputType = {
    id?: true
    nombre?: true
    creadorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RutinaMaxAggregateInputType = {
    id?: true
    nombre?: true
    creadorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RutinaCountAggregateInputType = {
    id?: true
    nombre?: true
    creadorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RutinaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rutina to aggregate.
     */
    where?: RutinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutinas to fetch.
     */
    orderBy?: RutinaOrderByWithRelationInput | RutinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RutinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rutinas
    **/
    _count?: true | RutinaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RutinaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RutinaMaxAggregateInputType
  }

  export type GetRutinaAggregateType<T extends RutinaAggregateArgs> = {
        [P in keyof T & keyof AggregateRutina]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRutina[P]>
      : GetScalarType<T[P], AggregateRutina[P]>
  }




  export type RutinaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RutinaWhereInput
    orderBy?: RutinaOrderByWithAggregationInput | RutinaOrderByWithAggregationInput[]
    by: RutinaScalarFieldEnum[] | RutinaScalarFieldEnum
    having?: RutinaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RutinaCountAggregateInputType | true
    _min?: RutinaMinAggregateInputType
    _max?: RutinaMaxAggregateInputType
  }

  export type RutinaGroupByOutputType = {
    id: string
    nombre: string
    creadorId: string
    createdAt: Date
    updatedAt: Date
    _count: RutinaCountAggregateOutputType | null
    _min: RutinaMinAggregateOutputType | null
    _max: RutinaMaxAggregateOutputType | null
  }

  type GetRutinaGroupByPayload<T extends RutinaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RutinaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RutinaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RutinaGroupByOutputType[P]>
            : GetScalarType<T[P], RutinaGroupByOutputType[P]>
        }
      >
    >


  export type RutinaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    creadorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ejercicios?: boolean | Rutina$ejerciciosArgs<ExtArgs>
    asignaciones?: boolean | Rutina$asignacionesArgs<ExtArgs>
    _count?: boolean | RutinaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rutina"]>

  export type RutinaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    creadorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["rutina"]>

  export type RutinaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    creadorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["rutina"]>

  export type RutinaSelectScalar = {
    id?: boolean
    nombre?: boolean
    creadorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RutinaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "creadorId" | "createdAt" | "updatedAt", ExtArgs["result"]["rutina"]>
  export type RutinaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ejercicios?: boolean | Rutina$ejerciciosArgs<ExtArgs>
    asignaciones?: boolean | Rutina$asignacionesArgs<ExtArgs>
    _count?: boolean | RutinaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RutinaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RutinaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RutinaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rutina"
    objects: {
      ejercicios: Prisma.$RutinaEjercicioPayload<ExtArgs>[]
      asignaciones: Prisma.$AsignacionRutinaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      creadorId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rutina"]>
    composites: {}
  }

  type RutinaGetPayload<S extends boolean | null | undefined | RutinaDefaultArgs> = $Result.GetResult<Prisma.$RutinaPayload, S>

  type RutinaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RutinaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RutinaCountAggregateInputType | true
    }

  export interface RutinaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rutina'], meta: { name: 'Rutina' } }
    /**
     * Find zero or one Rutina that matches the filter.
     * @param {RutinaFindUniqueArgs} args - Arguments to find a Rutina
     * @example
     * // Get one Rutina
     * const rutina = await prisma.rutina.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RutinaFindUniqueArgs>(args: SelectSubset<T, RutinaFindUniqueArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rutina that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RutinaFindUniqueOrThrowArgs} args - Arguments to find a Rutina
     * @example
     * // Get one Rutina
     * const rutina = await prisma.rutina.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RutinaFindUniqueOrThrowArgs>(args: SelectSubset<T, RutinaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rutina that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaFindFirstArgs} args - Arguments to find a Rutina
     * @example
     * // Get one Rutina
     * const rutina = await prisma.rutina.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RutinaFindFirstArgs>(args?: SelectSubset<T, RutinaFindFirstArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rutina that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaFindFirstOrThrowArgs} args - Arguments to find a Rutina
     * @example
     * // Get one Rutina
     * const rutina = await prisma.rutina.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RutinaFindFirstOrThrowArgs>(args?: SelectSubset<T, RutinaFindFirstOrThrowArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rutinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rutinas
     * const rutinas = await prisma.rutina.findMany()
     * 
     * // Get first 10 Rutinas
     * const rutinas = await prisma.rutina.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rutinaWithIdOnly = await prisma.rutina.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RutinaFindManyArgs>(args?: SelectSubset<T, RutinaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rutina.
     * @param {RutinaCreateArgs} args - Arguments to create a Rutina.
     * @example
     * // Create one Rutina
     * const Rutina = await prisma.rutina.create({
     *   data: {
     *     // ... data to create a Rutina
     *   }
     * })
     * 
     */
    create<T extends RutinaCreateArgs>(args: SelectSubset<T, RutinaCreateArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rutinas.
     * @param {RutinaCreateManyArgs} args - Arguments to create many Rutinas.
     * @example
     * // Create many Rutinas
     * const rutina = await prisma.rutina.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RutinaCreateManyArgs>(args?: SelectSubset<T, RutinaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rutinas and returns the data saved in the database.
     * @param {RutinaCreateManyAndReturnArgs} args - Arguments to create many Rutinas.
     * @example
     * // Create many Rutinas
     * const rutina = await prisma.rutina.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rutinas and only return the `id`
     * const rutinaWithIdOnly = await prisma.rutina.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RutinaCreateManyAndReturnArgs>(args?: SelectSubset<T, RutinaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rutina.
     * @param {RutinaDeleteArgs} args - Arguments to delete one Rutina.
     * @example
     * // Delete one Rutina
     * const Rutina = await prisma.rutina.delete({
     *   where: {
     *     // ... filter to delete one Rutina
     *   }
     * })
     * 
     */
    delete<T extends RutinaDeleteArgs>(args: SelectSubset<T, RutinaDeleteArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rutina.
     * @param {RutinaUpdateArgs} args - Arguments to update one Rutina.
     * @example
     * // Update one Rutina
     * const rutina = await prisma.rutina.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RutinaUpdateArgs>(args: SelectSubset<T, RutinaUpdateArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rutinas.
     * @param {RutinaDeleteManyArgs} args - Arguments to filter Rutinas to delete.
     * @example
     * // Delete a few Rutinas
     * const { count } = await prisma.rutina.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RutinaDeleteManyArgs>(args?: SelectSubset<T, RutinaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rutinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rutinas
     * const rutina = await prisma.rutina.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RutinaUpdateManyArgs>(args: SelectSubset<T, RutinaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rutinas and returns the data updated in the database.
     * @param {RutinaUpdateManyAndReturnArgs} args - Arguments to update many Rutinas.
     * @example
     * // Update many Rutinas
     * const rutina = await prisma.rutina.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rutinas and only return the `id`
     * const rutinaWithIdOnly = await prisma.rutina.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RutinaUpdateManyAndReturnArgs>(args: SelectSubset<T, RutinaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rutina.
     * @param {RutinaUpsertArgs} args - Arguments to update or create a Rutina.
     * @example
     * // Update or create a Rutina
     * const rutina = await prisma.rutina.upsert({
     *   create: {
     *     // ... data to create a Rutina
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rutina we want to update
     *   }
     * })
     */
    upsert<T extends RutinaUpsertArgs>(args: SelectSubset<T, RutinaUpsertArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rutinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaCountArgs} args - Arguments to filter Rutinas to count.
     * @example
     * // Count the number of Rutinas
     * const count = await prisma.rutina.count({
     *   where: {
     *     // ... the filter for the Rutinas we want to count
     *   }
     * })
    **/
    count<T extends RutinaCountArgs>(
      args?: Subset<T, RutinaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RutinaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rutina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RutinaAggregateArgs>(args: Subset<T, RutinaAggregateArgs>): Prisma.PrismaPromise<GetRutinaAggregateType<T>>

    /**
     * Group by Rutina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RutinaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RutinaGroupByArgs['orderBy'] }
        : { orderBy?: RutinaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RutinaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRutinaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rutina model
   */
  readonly fields: RutinaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rutina.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RutinaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ejercicios<T extends Rutina$ejerciciosArgs<ExtArgs> = {}>(args?: Subset<T, Rutina$ejerciciosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    asignaciones<T extends Rutina$asignacionesArgs<ExtArgs> = {}>(args?: Subset<T, Rutina$asignacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsignacionRutinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rutina model
   */
  interface RutinaFieldRefs {
    readonly id: FieldRef<"Rutina", 'String'>
    readonly nombre: FieldRef<"Rutina", 'String'>
    readonly creadorId: FieldRef<"Rutina", 'String'>
    readonly createdAt: FieldRef<"Rutina", 'DateTime'>
    readonly updatedAt: FieldRef<"Rutina", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rutina findUnique
   */
  export type RutinaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * Filter, which Rutina to fetch.
     */
    where: RutinaWhereUniqueInput
  }

  /**
   * Rutina findUniqueOrThrow
   */
  export type RutinaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * Filter, which Rutina to fetch.
     */
    where: RutinaWhereUniqueInput
  }

  /**
   * Rutina findFirst
   */
  export type RutinaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * Filter, which Rutina to fetch.
     */
    where?: RutinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutinas to fetch.
     */
    orderBy?: RutinaOrderByWithRelationInput | RutinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rutinas.
     */
    cursor?: RutinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rutinas.
     */
    distinct?: RutinaScalarFieldEnum | RutinaScalarFieldEnum[]
  }

  /**
   * Rutina findFirstOrThrow
   */
  export type RutinaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * Filter, which Rutina to fetch.
     */
    where?: RutinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutinas to fetch.
     */
    orderBy?: RutinaOrderByWithRelationInput | RutinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rutinas.
     */
    cursor?: RutinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rutinas.
     */
    distinct?: RutinaScalarFieldEnum | RutinaScalarFieldEnum[]
  }

  /**
   * Rutina findMany
   */
  export type RutinaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * Filter, which Rutinas to fetch.
     */
    where?: RutinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutinas to fetch.
     */
    orderBy?: RutinaOrderByWithRelationInput | RutinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rutinas.
     */
    cursor?: RutinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutinas.
     */
    skip?: number
    distinct?: RutinaScalarFieldEnum | RutinaScalarFieldEnum[]
  }

  /**
   * Rutina create
   */
  export type RutinaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * The data needed to create a Rutina.
     */
    data: XOR<RutinaCreateInput, RutinaUncheckedCreateInput>
  }

  /**
   * Rutina createMany
   */
  export type RutinaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rutinas.
     */
    data: RutinaCreateManyInput | RutinaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rutina createManyAndReturn
   */
  export type RutinaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * The data used to create many Rutinas.
     */
    data: RutinaCreateManyInput | RutinaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rutina update
   */
  export type RutinaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * The data needed to update a Rutina.
     */
    data: XOR<RutinaUpdateInput, RutinaUncheckedUpdateInput>
    /**
     * Choose, which Rutina to update.
     */
    where: RutinaWhereUniqueInput
  }

  /**
   * Rutina updateMany
   */
  export type RutinaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rutinas.
     */
    data: XOR<RutinaUpdateManyMutationInput, RutinaUncheckedUpdateManyInput>
    /**
     * Filter which Rutinas to update
     */
    where?: RutinaWhereInput
    /**
     * Limit how many Rutinas to update.
     */
    limit?: number
  }

  /**
   * Rutina updateManyAndReturn
   */
  export type RutinaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * The data used to update Rutinas.
     */
    data: XOR<RutinaUpdateManyMutationInput, RutinaUncheckedUpdateManyInput>
    /**
     * Filter which Rutinas to update
     */
    where?: RutinaWhereInput
    /**
     * Limit how many Rutinas to update.
     */
    limit?: number
  }

  /**
   * Rutina upsert
   */
  export type RutinaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * The filter to search for the Rutina to update in case it exists.
     */
    where: RutinaWhereUniqueInput
    /**
     * In case the Rutina found by the `where` argument doesn't exist, create a new Rutina with this data.
     */
    create: XOR<RutinaCreateInput, RutinaUncheckedCreateInput>
    /**
     * In case the Rutina was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RutinaUpdateInput, RutinaUncheckedUpdateInput>
  }

  /**
   * Rutina delete
   */
  export type RutinaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * Filter which Rutina to delete.
     */
    where: RutinaWhereUniqueInput
  }

  /**
   * Rutina deleteMany
   */
  export type RutinaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rutinas to delete
     */
    where?: RutinaWhereInput
    /**
     * Limit how many Rutinas to delete.
     */
    limit?: number
  }

  /**
   * Rutina.ejercicios
   */
  export type Rutina$ejerciciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    where?: RutinaEjercicioWhereInput
    orderBy?: RutinaEjercicioOrderByWithRelationInput | RutinaEjercicioOrderByWithRelationInput[]
    cursor?: RutinaEjercicioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RutinaEjercicioScalarFieldEnum | RutinaEjercicioScalarFieldEnum[]
  }

  /**
   * Rutina.asignaciones
   */
  export type Rutina$asignacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionRutina
     */
    select?: AsignacionRutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionRutina
     */
    omit?: AsignacionRutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionRutinaInclude<ExtArgs> | null
    where?: AsignacionRutinaWhereInput
    orderBy?: AsignacionRutinaOrderByWithRelationInput | AsignacionRutinaOrderByWithRelationInput[]
    cursor?: AsignacionRutinaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsignacionRutinaScalarFieldEnum | AsignacionRutinaScalarFieldEnum[]
  }

  /**
   * Rutina without action
   */
  export type RutinaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
  }


  /**
   * Model RutinaEjercicio
   */

  export type AggregateRutinaEjercicio = {
    _count: RutinaEjercicioCountAggregateOutputType | null
    _avg: RutinaEjercicioAvgAggregateOutputType | null
    _sum: RutinaEjercicioSumAggregateOutputType | null
    _min: RutinaEjercicioMinAggregateOutputType | null
    _max: RutinaEjercicioMaxAggregateOutputType | null
  }

  export type RutinaEjercicioAvgAggregateOutputType = {
    series: number | null
  }

  export type RutinaEjercicioSumAggregateOutputType = {
    series: number | null
  }

  export type RutinaEjercicioMinAggregateOutputType = {
    id: string | null
    rutinaId: string | null
    ejercicioId: string | null
    series: number | null
    repeticiones: string | null
    cargaSugerida: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RutinaEjercicioMaxAggregateOutputType = {
    id: string | null
    rutinaId: string | null
    ejercicioId: string | null
    series: number | null
    repeticiones: string | null
    cargaSugerida: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RutinaEjercicioCountAggregateOutputType = {
    id: number
    rutinaId: number
    ejercicioId: number
    series: number
    repeticiones: number
    cargaSugerida: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RutinaEjercicioAvgAggregateInputType = {
    series?: true
  }

  export type RutinaEjercicioSumAggregateInputType = {
    series?: true
  }

  export type RutinaEjercicioMinAggregateInputType = {
    id?: true
    rutinaId?: true
    ejercicioId?: true
    series?: true
    repeticiones?: true
    cargaSugerida?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RutinaEjercicioMaxAggregateInputType = {
    id?: true
    rutinaId?: true
    ejercicioId?: true
    series?: true
    repeticiones?: true
    cargaSugerida?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RutinaEjercicioCountAggregateInputType = {
    id?: true
    rutinaId?: true
    ejercicioId?: true
    series?: true
    repeticiones?: true
    cargaSugerida?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RutinaEjercicioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RutinaEjercicio to aggregate.
     */
    where?: RutinaEjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RutinaEjercicios to fetch.
     */
    orderBy?: RutinaEjercicioOrderByWithRelationInput | RutinaEjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RutinaEjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RutinaEjercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RutinaEjercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RutinaEjercicios
    **/
    _count?: true | RutinaEjercicioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RutinaEjercicioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RutinaEjercicioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RutinaEjercicioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RutinaEjercicioMaxAggregateInputType
  }

  export type GetRutinaEjercicioAggregateType<T extends RutinaEjercicioAggregateArgs> = {
        [P in keyof T & keyof AggregateRutinaEjercicio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRutinaEjercicio[P]>
      : GetScalarType<T[P], AggregateRutinaEjercicio[P]>
  }




  export type RutinaEjercicioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RutinaEjercicioWhereInput
    orderBy?: RutinaEjercicioOrderByWithAggregationInput | RutinaEjercicioOrderByWithAggregationInput[]
    by: RutinaEjercicioScalarFieldEnum[] | RutinaEjercicioScalarFieldEnum
    having?: RutinaEjercicioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RutinaEjercicioCountAggregateInputType | true
    _avg?: RutinaEjercicioAvgAggregateInputType
    _sum?: RutinaEjercicioSumAggregateInputType
    _min?: RutinaEjercicioMinAggregateInputType
    _max?: RutinaEjercicioMaxAggregateInputType
  }

  export type RutinaEjercicioGroupByOutputType = {
    id: string
    rutinaId: string
    ejercicioId: string
    series: number
    repeticiones: string
    cargaSugerida: string
    createdAt: Date
    updatedAt: Date
    _count: RutinaEjercicioCountAggregateOutputType | null
    _avg: RutinaEjercicioAvgAggregateOutputType | null
    _sum: RutinaEjercicioSumAggregateOutputType | null
    _min: RutinaEjercicioMinAggregateOutputType | null
    _max: RutinaEjercicioMaxAggregateOutputType | null
  }

  type GetRutinaEjercicioGroupByPayload<T extends RutinaEjercicioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RutinaEjercicioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RutinaEjercicioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RutinaEjercicioGroupByOutputType[P]>
            : GetScalarType<T[P], RutinaEjercicioGroupByOutputType[P]>
        }
      >
    >


  export type RutinaEjercicioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rutinaId?: boolean
    ejercicioId?: boolean
    series?: boolean
    repeticiones?: boolean
    cargaSugerida?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rutinaEjercicio"]>

  export type RutinaEjercicioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rutinaId?: boolean
    ejercicioId?: boolean
    series?: boolean
    repeticiones?: boolean
    cargaSugerida?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rutinaEjercicio"]>

  export type RutinaEjercicioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rutinaId?: boolean
    ejercicioId?: boolean
    series?: boolean
    repeticiones?: boolean
    cargaSugerida?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rutinaEjercicio"]>

  export type RutinaEjercicioSelectScalar = {
    id?: boolean
    rutinaId?: boolean
    ejercicioId?: boolean
    series?: boolean
    repeticiones?: boolean
    cargaSugerida?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RutinaEjercicioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rutinaId" | "ejercicioId" | "series" | "repeticiones" | "cargaSugerida" | "createdAt" | "updatedAt", ExtArgs["result"]["rutinaEjercicio"]>
  export type RutinaEjercicioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }
  export type RutinaEjercicioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }
  export type RutinaEjercicioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }

  export type $RutinaEjercicioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RutinaEjercicio"
    objects: {
      rutina: Prisma.$RutinaPayload<ExtArgs>
      ejercicio: Prisma.$EjercicioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rutinaId: string
      ejercicioId: string
      series: number
      repeticiones: string
      cargaSugerida: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rutinaEjercicio"]>
    composites: {}
  }

  type RutinaEjercicioGetPayload<S extends boolean | null | undefined | RutinaEjercicioDefaultArgs> = $Result.GetResult<Prisma.$RutinaEjercicioPayload, S>

  type RutinaEjercicioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RutinaEjercicioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RutinaEjercicioCountAggregateInputType | true
    }

  export interface RutinaEjercicioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RutinaEjercicio'], meta: { name: 'RutinaEjercicio' } }
    /**
     * Find zero or one RutinaEjercicio that matches the filter.
     * @param {RutinaEjercicioFindUniqueArgs} args - Arguments to find a RutinaEjercicio
     * @example
     * // Get one RutinaEjercicio
     * const rutinaEjercicio = await prisma.rutinaEjercicio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RutinaEjercicioFindUniqueArgs>(args: SelectSubset<T, RutinaEjercicioFindUniqueArgs<ExtArgs>>): Prisma__RutinaEjercicioClient<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RutinaEjercicio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RutinaEjercicioFindUniqueOrThrowArgs} args - Arguments to find a RutinaEjercicio
     * @example
     * // Get one RutinaEjercicio
     * const rutinaEjercicio = await prisma.rutinaEjercicio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RutinaEjercicioFindUniqueOrThrowArgs>(args: SelectSubset<T, RutinaEjercicioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RutinaEjercicioClient<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RutinaEjercicio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaEjercicioFindFirstArgs} args - Arguments to find a RutinaEjercicio
     * @example
     * // Get one RutinaEjercicio
     * const rutinaEjercicio = await prisma.rutinaEjercicio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RutinaEjercicioFindFirstArgs>(args?: SelectSubset<T, RutinaEjercicioFindFirstArgs<ExtArgs>>): Prisma__RutinaEjercicioClient<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RutinaEjercicio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaEjercicioFindFirstOrThrowArgs} args - Arguments to find a RutinaEjercicio
     * @example
     * // Get one RutinaEjercicio
     * const rutinaEjercicio = await prisma.rutinaEjercicio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RutinaEjercicioFindFirstOrThrowArgs>(args?: SelectSubset<T, RutinaEjercicioFindFirstOrThrowArgs<ExtArgs>>): Prisma__RutinaEjercicioClient<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RutinaEjercicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaEjercicioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RutinaEjercicios
     * const rutinaEjercicios = await prisma.rutinaEjercicio.findMany()
     * 
     * // Get first 10 RutinaEjercicios
     * const rutinaEjercicios = await prisma.rutinaEjercicio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rutinaEjercicioWithIdOnly = await prisma.rutinaEjercicio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RutinaEjercicioFindManyArgs>(args?: SelectSubset<T, RutinaEjercicioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RutinaEjercicio.
     * @param {RutinaEjercicioCreateArgs} args - Arguments to create a RutinaEjercicio.
     * @example
     * // Create one RutinaEjercicio
     * const RutinaEjercicio = await prisma.rutinaEjercicio.create({
     *   data: {
     *     // ... data to create a RutinaEjercicio
     *   }
     * })
     * 
     */
    create<T extends RutinaEjercicioCreateArgs>(args: SelectSubset<T, RutinaEjercicioCreateArgs<ExtArgs>>): Prisma__RutinaEjercicioClient<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RutinaEjercicios.
     * @param {RutinaEjercicioCreateManyArgs} args - Arguments to create many RutinaEjercicios.
     * @example
     * // Create many RutinaEjercicios
     * const rutinaEjercicio = await prisma.rutinaEjercicio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RutinaEjercicioCreateManyArgs>(args?: SelectSubset<T, RutinaEjercicioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RutinaEjercicios and returns the data saved in the database.
     * @param {RutinaEjercicioCreateManyAndReturnArgs} args - Arguments to create many RutinaEjercicios.
     * @example
     * // Create many RutinaEjercicios
     * const rutinaEjercicio = await prisma.rutinaEjercicio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RutinaEjercicios and only return the `id`
     * const rutinaEjercicioWithIdOnly = await prisma.rutinaEjercicio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RutinaEjercicioCreateManyAndReturnArgs>(args?: SelectSubset<T, RutinaEjercicioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RutinaEjercicio.
     * @param {RutinaEjercicioDeleteArgs} args - Arguments to delete one RutinaEjercicio.
     * @example
     * // Delete one RutinaEjercicio
     * const RutinaEjercicio = await prisma.rutinaEjercicio.delete({
     *   where: {
     *     // ... filter to delete one RutinaEjercicio
     *   }
     * })
     * 
     */
    delete<T extends RutinaEjercicioDeleteArgs>(args: SelectSubset<T, RutinaEjercicioDeleteArgs<ExtArgs>>): Prisma__RutinaEjercicioClient<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RutinaEjercicio.
     * @param {RutinaEjercicioUpdateArgs} args - Arguments to update one RutinaEjercicio.
     * @example
     * // Update one RutinaEjercicio
     * const rutinaEjercicio = await prisma.rutinaEjercicio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RutinaEjercicioUpdateArgs>(args: SelectSubset<T, RutinaEjercicioUpdateArgs<ExtArgs>>): Prisma__RutinaEjercicioClient<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RutinaEjercicios.
     * @param {RutinaEjercicioDeleteManyArgs} args - Arguments to filter RutinaEjercicios to delete.
     * @example
     * // Delete a few RutinaEjercicios
     * const { count } = await prisma.rutinaEjercicio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RutinaEjercicioDeleteManyArgs>(args?: SelectSubset<T, RutinaEjercicioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RutinaEjercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaEjercicioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RutinaEjercicios
     * const rutinaEjercicio = await prisma.rutinaEjercicio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RutinaEjercicioUpdateManyArgs>(args: SelectSubset<T, RutinaEjercicioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RutinaEjercicios and returns the data updated in the database.
     * @param {RutinaEjercicioUpdateManyAndReturnArgs} args - Arguments to update many RutinaEjercicios.
     * @example
     * // Update many RutinaEjercicios
     * const rutinaEjercicio = await prisma.rutinaEjercicio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RutinaEjercicios and only return the `id`
     * const rutinaEjercicioWithIdOnly = await prisma.rutinaEjercicio.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RutinaEjercicioUpdateManyAndReturnArgs>(args: SelectSubset<T, RutinaEjercicioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RutinaEjercicio.
     * @param {RutinaEjercicioUpsertArgs} args - Arguments to update or create a RutinaEjercicio.
     * @example
     * // Update or create a RutinaEjercicio
     * const rutinaEjercicio = await prisma.rutinaEjercicio.upsert({
     *   create: {
     *     // ... data to create a RutinaEjercicio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RutinaEjercicio we want to update
     *   }
     * })
     */
    upsert<T extends RutinaEjercicioUpsertArgs>(args: SelectSubset<T, RutinaEjercicioUpsertArgs<ExtArgs>>): Prisma__RutinaEjercicioClient<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RutinaEjercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaEjercicioCountArgs} args - Arguments to filter RutinaEjercicios to count.
     * @example
     * // Count the number of RutinaEjercicios
     * const count = await prisma.rutinaEjercicio.count({
     *   where: {
     *     // ... the filter for the RutinaEjercicios we want to count
     *   }
     * })
    **/
    count<T extends RutinaEjercicioCountArgs>(
      args?: Subset<T, RutinaEjercicioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RutinaEjercicioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RutinaEjercicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaEjercicioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RutinaEjercicioAggregateArgs>(args: Subset<T, RutinaEjercicioAggregateArgs>): Prisma.PrismaPromise<GetRutinaEjercicioAggregateType<T>>

    /**
     * Group by RutinaEjercicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaEjercicioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RutinaEjercicioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RutinaEjercicioGroupByArgs['orderBy'] }
        : { orderBy?: RutinaEjercicioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RutinaEjercicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRutinaEjercicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RutinaEjercicio model
   */
  readonly fields: RutinaEjercicioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RutinaEjercicio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RutinaEjercicioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rutina<T extends RutinaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RutinaDefaultArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ejercicio<T extends EjercicioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EjercicioDefaultArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RutinaEjercicio model
   */
  interface RutinaEjercicioFieldRefs {
    readonly id: FieldRef<"RutinaEjercicio", 'String'>
    readonly rutinaId: FieldRef<"RutinaEjercicio", 'String'>
    readonly ejercicioId: FieldRef<"RutinaEjercicio", 'String'>
    readonly series: FieldRef<"RutinaEjercicio", 'Int'>
    readonly repeticiones: FieldRef<"RutinaEjercicio", 'String'>
    readonly cargaSugerida: FieldRef<"RutinaEjercicio", 'String'>
    readonly createdAt: FieldRef<"RutinaEjercicio", 'DateTime'>
    readonly updatedAt: FieldRef<"RutinaEjercicio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RutinaEjercicio findUnique
   */
  export type RutinaEjercicioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    /**
     * Filter, which RutinaEjercicio to fetch.
     */
    where: RutinaEjercicioWhereUniqueInput
  }

  /**
   * RutinaEjercicio findUniqueOrThrow
   */
  export type RutinaEjercicioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    /**
     * Filter, which RutinaEjercicio to fetch.
     */
    where: RutinaEjercicioWhereUniqueInput
  }

  /**
   * RutinaEjercicio findFirst
   */
  export type RutinaEjercicioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    /**
     * Filter, which RutinaEjercicio to fetch.
     */
    where?: RutinaEjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RutinaEjercicios to fetch.
     */
    orderBy?: RutinaEjercicioOrderByWithRelationInput | RutinaEjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RutinaEjercicios.
     */
    cursor?: RutinaEjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RutinaEjercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RutinaEjercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RutinaEjercicios.
     */
    distinct?: RutinaEjercicioScalarFieldEnum | RutinaEjercicioScalarFieldEnum[]
  }

  /**
   * RutinaEjercicio findFirstOrThrow
   */
  export type RutinaEjercicioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    /**
     * Filter, which RutinaEjercicio to fetch.
     */
    where?: RutinaEjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RutinaEjercicios to fetch.
     */
    orderBy?: RutinaEjercicioOrderByWithRelationInput | RutinaEjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RutinaEjercicios.
     */
    cursor?: RutinaEjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RutinaEjercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RutinaEjercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RutinaEjercicios.
     */
    distinct?: RutinaEjercicioScalarFieldEnum | RutinaEjercicioScalarFieldEnum[]
  }

  /**
   * RutinaEjercicio findMany
   */
  export type RutinaEjercicioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    /**
     * Filter, which RutinaEjercicios to fetch.
     */
    where?: RutinaEjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RutinaEjercicios to fetch.
     */
    orderBy?: RutinaEjercicioOrderByWithRelationInput | RutinaEjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RutinaEjercicios.
     */
    cursor?: RutinaEjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RutinaEjercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RutinaEjercicios.
     */
    skip?: number
    distinct?: RutinaEjercicioScalarFieldEnum | RutinaEjercicioScalarFieldEnum[]
  }

  /**
   * RutinaEjercicio create
   */
  export type RutinaEjercicioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    /**
     * The data needed to create a RutinaEjercicio.
     */
    data: XOR<RutinaEjercicioCreateInput, RutinaEjercicioUncheckedCreateInput>
  }

  /**
   * RutinaEjercicio createMany
   */
  export type RutinaEjercicioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RutinaEjercicios.
     */
    data: RutinaEjercicioCreateManyInput | RutinaEjercicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RutinaEjercicio createManyAndReturn
   */
  export type RutinaEjercicioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * The data used to create many RutinaEjercicios.
     */
    data: RutinaEjercicioCreateManyInput | RutinaEjercicioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RutinaEjercicio update
   */
  export type RutinaEjercicioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    /**
     * The data needed to update a RutinaEjercicio.
     */
    data: XOR<RutinaEjercicioUpdateInput, RutinaEjercicioUncheckedUpdateInput>
    /**
     * Choose, which RutinaEjercicio to update.
     */
    where: RutinaEjercicioWhereUniqueInput
  }

  /**
   * RutinaEjercicio updateMany
   */
  export type RutinaEjercicioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RutinaEjercicios.
     */
    data: XOR<RutinaEjercicioUpdateManyMutationInput, RutinaEjercicioUncheckedUpdateManyInput>
    /**
     * Filter which RutinaEjercicios to update
     */
    where?: RutinaEjercicioWhereInput
    /**
     * Limit how many RutinaEjercicios to update.
     */
    limit?: number
  }

  /**
   * RutinaEjercicio updateManyAndReturn
   */
  export type RutinaEjercicioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * The data used to update RutinaEjercicios.
     */
    data: XOR<RutinaEjercicioUpdateManyMutationInput, RutinaEjercicioUncheckedUpdateManyInput>
    /**
     * Filter which RutinaEjercicios to update
     */
    where?: RutinaEjercicioWhereInput
    /**
     * Limit how many RutinaEjercicios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RutinaEjercicio upsert
   */
  export type RutinaEjercicioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    /**
     * The filter to search for the RutinaEjercicio to update in case it exists.
     */
    where: RutinaEjercicioWhereUniqueInput
    /**
     * In case the RutinaEjercicio found by the `where` argument doesn't exist, create a new RutinaEjercicio with this data.
     */
    create: XOR<RutinaEjercicioCreateInput, RutinaEjercicioUncheckedCreateInput>
    /**
     * In case the RutinaEjercicio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RutinaEjercicioUpdateInput, RutinaEjercicioUncheckedUpdateInput>
  }

  /**
   * RutinaEjercicio delete
   */
  export type RutinaEjercicioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    /**
     * Filter which RutinaEjercicio to delete.
     */
    where: RutinaEjercicioWhereUniqueInput
  }

  /**
   * RutinaEjercicio deleteMany
   */
  export type RutinaEjercicioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RutinaEjercicios to delete
     */
    where?: RutinaEjercicioWhereInput
    /**
     * Limit how many RutinaEjercicios to delete.
     */
    limit?: number
  }

  /**
   * RutinaEjercicio without action
   */
  export type RutinaEjercicioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
  }


  /**
   * Model AsignacionRutina
   */

  export type AggregateAsignacionRutina = {
    _count: AsignacionRutinaCountAggregateOutputType | null
    _min: AsignacionRutinaMinAggregateOutputType | null
    _max: AsignacionRutinaMaxAggregateOutputType | null
  }

  export type AsignacionRutinaMinAggregateOutputType = {
    id: string | null
    clienteId: string | null
    entrenadorId: string | null
    rutinaId: string | null
    fechaInicio: Date | null
    fechaFin: Date | null
    activa: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AsignacionRutinaMaxAggregateOutputType = {
    id: string | null
    clienteId: string | null
    entrenadorId: string | null
    rutinaId: string | null
    fechaInicio: Date | null
    fechaFin: Date | null
    activa: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AsignacionRutinaCountAggregateOutputType = {
    id: number
    clienteId: number
    entrenadorId: number
    rutinaId: number
    fechaInicio: number
    fechaFin: number
    activa: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AsignacionRutinaMinAggregateInputType = {
    id?: true
    clienteId?: true
    entrenadorId?: true
    rutinaId?: true
    fechaInicio?: true
    fechaFin?: true
    activa?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AsignacionRutinaMaxAggregateInputType = {
    id?: true
    clienteId?: true
    entrenadorId?: true
    rutinaId?: true
    fechaInicio?: true
    fechaFin?: true
    activa?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AsignacionRutinaCountAggregateInputType = {
    id?: true
    clienteId?: true
    entrenadorId?: true
    rutinaId?: true
    fechaInicio?: true
    fechaFin?: true
    activa?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AsignacionRutinaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AsignacionRutina to aggregate.
     */
    where?: AsignacionRutinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsignacionRutinas to fetch.
     */
    orderBy?: AsignacionRutinaOrderByWithRelationInput | AsignacionRutinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AsignacionRutinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsignacionRutinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsignacionRutinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AsignacionRutinas
    **/
    _count?: true | AsignacionRutinaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AsignacionRutinaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AsignacionRutinaMaxAggregateInputType
  }

  export type GetAsignacionRutinaAggregateType<T extends AsignacionRutinaAggregateArgs> = {
        [P in keyof T & keyof AggregateAsignacionRutina]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsignacionRutina[P]>
      : GetScalarType<T[P], AggregateAsignacionRutina[P]>
  }




  export type AsignacionRutinaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsignacionRutinaWhereInput
    orderBy?: AsignacionRutinaOrderByWithAggregationInput | AsignacionRutinaOrderByWithAggregationInput[]
    by: AsignacionRutinaScalarFieldEnum[] | AsignacionRutinaScalarFieldEnum
    having?: AsignacionRutinaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AsignacionRutinaCountAggregateInputType | true
    _min?: AsignacionRutinaMinAggregateInputType
    _max?: AsignacionRutinaMaxAggregateInputType
  }

  export type AsignacionRutinaGroupByOutputType = {
    id: string
    clienteId: string
    entrenadorId: string
    rutinaId: string
    fechaInicio: Date
    fechaFin: Date
    activa: boolean
    createdAt: Date
    updatedAt: Date
    _count: AsignacionRutinaCountAggregateOutputType | null
    _min: AsignacionRutinaMinAggregateOutputType | null
    _max: AsignacionRutinaMaxAggregateOutputType | null
  }

  type GetAsignacionRutinaGroupByPayload<T extends AsignacionRutinaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AsignacionRutinaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AsignacionRutinaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AsignacionRutinaGroupByOutputType[P]>
            : GetScalarType<T[P], AsignacionRutinaGroupByOutputType[P]>
        }
      >
    >


  export type AsignacionRutinaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    entrenadorId?: boolean
    rutinaId?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    activa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
    registros?: boolean | AsignacionRutina$registrosArgs<ExtArgs>
    _count?: boolean | AsignacionRutinaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asignacionRutina"]>

  export type AsignacionRutinaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    entrenadorId?: boolean
    rutinaId?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    activa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asignacionRutina"]>

  export type AsignacionRutinaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    entrenadorId?: boolean
    rutinaId?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    activa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asignacionRutina"]>

  export type AsignacionRutinaSelectScalar = {
    id?: boolean
    clienteId?: boolean
    entrenadorId?: boolean
    rutinaId?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    activa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AsignacionRutinaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clienteId" | "entrenadorId" | "rutinaId" | "fechaInicio" | "fechaFin" | "activa" | "createdAt" | "updatedAt", ExtArgs["result"]["asignacionRutina"]>
  export type AsignacionRutinaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
    registros?: boolean | AsignacionRutina$registrosArgs<ExtArgs>
    _count?: boolean | AsignacionRutinaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AsignacionRutinaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
  }
  export type AsignacionRutinaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
  }

  export type $AsignacionRutinaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AsignacionRutina"
    objects: {
      rutina: Prisma.$RutinaPayload<ExtArgs>
      registros: Prisma.$RegistroProgresoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clienteId: string
      entrenadorId: string
      rutinaId: string
      fechaInicio: Date
      fechaFin: Date
      activa: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["asignacionRutina"]>
    composites: {}
  }

  type AsignacionRutinaGetPayload<S extends boolean | null | undefined | AsignacionRutinaDefaultArgs> = $Result.GetResult<Prisma.$AsignacionRutinaPayload, S>

  type AsignacionRutinaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AsignacionRutinaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AsignacionRutinaCountAggregateInputType | true
    }

  export interface AsignacionRutinaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AsignacionRutina'], meta: { name: 'AsignacionRutina' } }
    /**
     * Find zero or one AsignacionRutina that matches the filter.
     * @param {AsignacionRutinaFindUniqueArgs} args - Arguments to find a AsignacionRutina
     * @example
     * // Get one AsignacionRutina
     * const asignacionRutina = await prisma.asignacionRutina.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AsignacionRutinaFindUniqueArgs>(args: SelectSubset<T, AsignacionRutinaFindUniqueArgs<ExtArgs>>): Prisma__AsignacionRutinaClient<$Result.GetResult<Prisma.$AsignacionRutinaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AsignacionRutina that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AsignacionRutinaFindUniqueOrThrowArgs} args - Arguments to find a AsignacionRutina
     * @example
     * // Get one AsignacionRutina
     * const asignacionRutina = await prisma.asignacionRutina.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AsignacionRutinaFindUniqueOrThrowArgs>(args: SelectSubset<T, AsignacionRutinaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AsignacionRutinaClient<$Result.GetResult<Prisma.$AsignacionRutinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AsignacionRutina that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignacionRutinaFindFirstArgs} args - Arguments to find a AsignacionRutina
     * @example
     * // Get one AsignacionRutina
     * const asignacionRutina = await prisma.asignacionRutina.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AsignacionRutinaFindFirstArgs>(args?: SelectSubset<T, AsignacionRutinaFindFirstArgs<ExtArgs>>): Prisma__AsignacionRutinaClient<$Result.GetResult<Prisma.$AsignacionRutinaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AsignacionRutina that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignacionRutinaFindFirstOrThrowArgs} args - Arguments to find a AsignacionRutina
     * @example
     * // Get one AsignacionRutina
     * const asignacionRutina = await prisma.asignacionRutina.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AsignacionRutinaFindFirstOrThrowArgs>(args?: SelectSubset<T, AsignacionRutinaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AsignacionRutinaClient<$Result.GetResult<Prisma.$AsignacionRutinaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AsignacionRutinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignacionRutinaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AsignacionRutinas
     * const asignacionRutinas = await prisma.asignacionRutina.findMany()
     * 
     * // Get first 10 AsignacionRutinas
     * const asignacionRutinas = await prisma.asignacionRutina.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const asignacionRutinaWithIdOnly = await prisma.asignacionRutina.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AsignacionRutinaFindManyArgs>(args?: SelectSubset<T, AsignacionRutinaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsignacionRutinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AsignacionRutina.
     * @param {AsignacionRutinaCreateArgs} args - Arguments to create a AsignacionRutina.
     * @example
     * // Create one AsignacionRutina
     * const AsignacionRutina = await prisma.asignacionRutina.create({
     *   data: {
     *     // ... data to create a AsignacionRutina
     *   }
     * })
     * 
     */
    create<T extends AsignacionRutinaCreateArgs>(args: SelectSubset<T, AsignacionRutinaCreateArgs<ExtArgs>>): Prisma__AsignacionRutinaClient<$Result.GetResult<Prisma.$AsignacionRutinaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AsignacionRutinas.
     * @param {AsignacionRutinaCreateManyArgs} args - Arguments to create many AsignacionRutinas.
     * @example
     * // Create many AsignacionRutinas
     * const asignacionRutina = await prisma.asignacionRutina.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AsignacionRutinaCreateManyArgs>(args?: SelectSubset<T, AsignacionRutinaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AsignacionRutinas and returns the data saved in the database.
     * @param {AsignacionRutinaCreateManyAndReturnArgs} args - Arguments to create many AsignacionRutinas.
     * @example
     * // Create many AsignacionRutinas
     * const asignacionRutina = await prisma.asignacionRutina.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AsignacionRutinas and only return the `id`
     * const asignacionRutinaWithIdOnly = await prisma.asignacionRutina.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AsignacionRutinaCreateManyAndReturnArgs>(args?: SelectSubset<T, AsignacionRutinaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsignacionRutinaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AsignacionRutina.
     * @param {AsignacionRutinaDeleteArgs} args - Arguments to delete one AsignacionRutina.
     * @example
     * // Delete one AsignacionRutina
     * const AsignacionRutina = await prisma.asignacionRutina.delete({
     *   where: {
     *     // ... filter to delete one AsignacionRutina
     *   }
     * })
     * 
     */
    delete<T extends AsignacionRutinaDeleteArgs>(args: SelectSubset<T, AsignacionRutinaDeleteArgs<ExtArgs>>): Prisma__AsignacionRutinaClient<$Result.GetResult<Prisma.$AsignacionRutinaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AsignacionRutina.
     * @param {AsignacionRutinaUpdateArgs} args - Arguments to update one AsignacionRutina.
     * @example
     * // Update one AsignacionRutina
     * const asignacionRutina = await prisma.asignacionRutina.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AsignacionRutinaUpdateArgs>(args: SelectSubset<T, AsignacionRutinaUpdateArgs<ExtArgs>>): Prisma__AsignacionRutinaClient<$Result.GetResult<Prisma.$AsignacionRutinaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AsignacionRutinas.
     * @param {AsignacionRutinaDeleteManyArgs} args - Arguments to filter AsignacionRutinas to delete.
     * @example
     * // Delete a few AsignacionRutinas
     * const { count } = await prisma.asignacionRutina.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AsignacionRutinaDeleteManyArgs>(args?: SelectSubset<T, AsignacionRutinaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AsignacionRutinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignacionRutinaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AsignacionRutinas
     * const asignacionRutina = await prisma.asignacionRutina.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AsignacionRutinaUpdateManyArgs>(args: SelectSubset<T, AsignacionRutinaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AsignacionRutinas and returns the data updated in the database.
     * @param {AsignacionRutinaUpdateManyAndReturnArgs} args - Arguments to update many AsignacionRutinas.
     * @example
     * // Update many AsignacionRutinas
     * const asignacionRutina = await prisma.asignacionRutina.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AsignacionRutinas and only return the `id`
     * const asignacionRutinaWithIdOnly = await prisma.asignacionRutina.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AsignacionRutinaUpdateManyAndReturnArgs>(args: SelectSubset<T, AsignacionRutinaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsignacionRutinaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AsignacionRutina.
     * @param {AsignacionRutinaUpsertArgs} args - Arguments to update or create a AsignacionRutina.
     * @example
     * // Update or create a AsignacionRutina
     * const asignacionRutina = await prisma.asignacionRutina.upsert({
     *   create: {
     *     // ... data to create a AsignacionRutina
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AsignacionRutina we want to update
     *   }
     * })
     */
    upsert<T extends AsignacionRutinaUpsertArgs>(args: SelectSubset<T, AsignacionRutinaUpsertArgs<ExtArgs>>): Prisma__AsignacionRutinaClient<$Result.GetResult<Prisma.$AsignacionRutinaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AsignacionRutinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignacionRutinaCountArgs} args - Arguments to filter AsignacionRutinas to count.
     * @example
     * // Count the number of AsignacionRutinas
     * const count = await prisma.asignacionRutina.count({
     *   where: {
     *     // ... the filter for the AsignacionRutinas we want to count
     *   }
     * })
    **/
    count<T extends AsignacionRutinaCountArgs>(
      args?: Subset<T, AsignacionRutinaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AsignacionRutinaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AsignacionRutina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignacionRutinaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AsignacionRutinaAggregateArgs>(args: Subset<T, AsignacionRutinaAggregateArgs>): Prisma.PrismaPromise<GetAsignacionRutinaAggregateType<T>>

    /**
     * Group by AsignacionRutina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignacionRutinaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AsignacionRutinaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AsignacionRutinaGroupByArgs['orderBy'] }
        : { orderBy?: AsignacionRutinaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AsignacionRutinaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsignacionRutinaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AsignacionRutina model
   */
  readonly fields: AsignacionRutinaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AsignacionRutina.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AsignacionRutinaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rutina<T extends RutinaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RutinaDefaultArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    registros<T extends AsignacionRutina$registrosArgs<ExtArgs> = {}>(args?: Subset<T, AsignacionRutina$registrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroProgresoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AsignacionRutina model
   */
  interface AsignacionRutinaFieldRefs {
    readonly id: FieldRef<"AsignacionRutina", 'String'>
    readonly clienteId: FieldRef<"AsignacionRutina", 'String'>
    readonly entrenadorId: FieldRef<"AsignacionRutina", 'String'>
    readonly rutinaId: FieldRef<"AsignacionRutina", 'String'>
    readonly fechaInicio: FieldRef<"AsignacionRutina", 'DateTime'>
    readonly fechaFin: FieldRef<"AsignacionRutina", 'DateTime'>
    readonly activa: FieldRef<"AsignacionRutina", 'Boolean'>
    readonly createdAt: FieldRef<"AsignacionRutina", 'DateTime'>
    readonly updatedAt: FieldRef<"AsignacionRutina", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AsignacionRutina findUnique
   */
  export type AsignacionRutinaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionRutina
     */
    select?: AsignacionRutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionRutina
     */
    omit?: AsignacionRutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionRutinaInclude<ExtArgs> | null
    /**
     * Filter, which AsignacionRutina to fetch.
     */
    where: AsignacionRutinaWhereUniqueInput
  }

  /**
   * AsignacionRutina findUniqueOrThrow
   */
  export type AsignacionRutinaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionRutina
     */
    select?: AsignacionRutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionRutina
     */
    omit?: AsignacionRutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionRutinaInclude<ExtArgs> | null
    /**
     * Filter, which AsignacionRutina to fetch.
     */
    where: AsignacionRutinaWhereUniqueInput
  }

  /**
   * AsignacionRutina findFirst
   */
  export type AsignacionRutinaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionRutina
     */
    select?: AsignacionRutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionRutina
     */
    omit?: AsignacionRutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionRutinaInclude<ExtArgs> | null
    /**
     * Filter, which AsignacionRutina to fetch.
     */
    where?: AsignacionRutinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsignacionRutinas to fetch.
     */
    orderBy?: AsignacionRutinaOrderByWithRelationInput | AsignacionRutinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AsignacionRutinas.
     */
    cursor?: AsignacionRutinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsignacionRutinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsignacionRutinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AsignacionRutinas.
     */
    distinct?: AsignacionRutinaScalarFieldEnum | AsignacionRutinaScalarFieldEnum[]
  }

  /**
   * AsignacionRutina findFirstOrThrow
   */
  export type AsignacionRutinaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionRutina
     */
    select?: AsignacionRutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionRutina
     */
    omit?: AsignacionRutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionRutinaInclude<ExtArgs> | null
    /**
     * Filter, which AsignacionRutina to fetch.
     */
    where?: AsignacionRutinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsignacionRutinas to fetch.
     */
    orderBy?: AsignacionRutinaOrderByWithRelationInput | AsignacionRutinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AsignacionRutinas.
     */
    cursor?: AsignacionRutinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsignacionRutinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsignacionRutinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AsignacionRutinas.
     */
    distinct?: AsignacionRutinaScalarFieldEnum | AsignacionRutinaScalarFieldEnum[]
  }

  /**
   * AsignacionRutina findMany
   */
  export type AsignacionRutinaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionRutina
     */
    select?: AsignacionRutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionRutina
     */
    omit?: AsignacionRutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionRutinaInclude<ExtArgs> | null
    /**
     * Filter, which AsignacionRutinas to fetch.
     */
    where?: AsignacionRutinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsignacionRutinas to fetch.
     */
    orderBy?: AsignacionRutinaOrderByWithRelationInput | AsignacionRutinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AsignacionRutinas.
     */
    cursor?: AsignacionRutinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsignacionRutinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsignacionRutinas.
     */
    skip?: number
    distinct?: AsignacionRutinaScalarFieldEnum | AsignacionRutinaScalarFieldEnum[]
  }

  /**
   * AsignacionRutina create
   */
  export type AsignacionRutinaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionRutina
     */
    select?: AsignacionRutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionRutina
     */
    omit?: AsignacionRutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionRutinaInclude<ExtArgs> | null
    /**
     * The data needed to create a AsignacionRutina.
     */
    data: XOR<AsignacionRutinaCreateInput, AsignacionRutinaUncheckedCreateInput>
  }

  /**
   * AsignacionRutina createMany
   */
  export type AsignacionRutinaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AsignacionRutinas.
     */
    data: AsignacionRutinaCreateManyInput | AsignacionRutinaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AsignacionRutina createManyAndReturn
   */
  export type AsignacionRutinaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionRutina
     */
    select?: AsignacionRutinaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionRutina
     */
    omit?: AsignacionRutinaOmit<ExtArgs> | null
    /**
     * The data used to create many AsignacionRutinas.
     */
    data: AsignacionRutinaCreateManyInput | AsignacionRutinaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionRutinaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AsignacionRutina update
   */
  export type AsignacionRutinaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionRutina
     */
    select?: AsignacionRutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionRutina
     */
    omit?: AsignacionRutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionRutinaInclude<ExtArgs> | null
    /**
     * The data needed to update a AsignacionRutina.
     */
    data: XOR<AsignacionRutinaUpdateInput, AsignacionRutinaUncheckedUpdateInput>
    /**
     * Choose, which AsignacionRutina to update.
     */
    where: AsignacionRutinaWhereUniqueInput
  }

  /**
   * AsignacionRutina updateMany
   */
  export type AsignacionRutinaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AsignacionRutinas.
     */
    data: XOR<AsignacionRutinaUpdateManyMutationInput, AsignacionRutinaUncheckedUpdateManyInput>
    /**
     * Filter which AsignacionRutinas to update
     */
    where?: AsignacionRutinaWhereInput
    /**
     * Limit how many AsignacionRutinas to update.
     */
    limit?: number
  }

  /**
   * AsignacionRutina updateManyAndReturn
   */
  export type AsignacionRutinaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionRutina
     */
    select?: AsignacionRutinaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionRutina
     */
    omit?: AsignacionRutinaOmit<ExtArgs> | null
    /**
     * The data used to update AsignacionRutinas.
     */
    data: XOR<AsignacionRutinaUpdateManyMutationInput, AsignacionRutinaUncheckedUpdateManyInput>
    /**
     * Filter which AsignacionRutinas to update
     */
    where?: AsignacionRutinaWhereInput
    /**
     * Limit how many AsignacionRutinas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionRutinaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AsignacionRutina upsert
   */
  export type AsignacionRutinaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionRutina
     */
    select?: AsignacionRutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionRutina
     */
    omit?: AsignacionRutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionRutinaInclude<ExtArgs> | null
    /**
     * The filter to search for the AsignacionRutina to update in case it exists.
     */
    where: AsignacionRutinaWhereUniqueInput
    /**
     * In case the AsignacionRutina found by the `where` argument doesn't exist, create a new AsignacionRutina with this data.
     */
    create: XOR<AsignacionRutinaCreateInput, AsignacionRutinaUncheckedCreateInput>
    /**
     * In case the AsignacionRutina was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AsignacionRutinaUpdateInput, AsignacionRutinaUncheckedUpdateInput>
  }

  /**
   * AsignacionRutina delete
   */
  export type AsignacionRutinaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionRutina
     */
    select?: AsignacionRutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionRutina
     */
    omit?: AsignacionRutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionRutinaInclude<ExtArgs> | null
    /**
     * Filter which AsignacionRutina to delete.
     */
    where: AsignacionRutinaWhereUniqueInput
  }

  /**
   * AsignacionRutina deleteMany
   */
  export type AsignacionRutinaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AsignacionRutinas to delete
     */
    where?: AsignacionRutinaWhereInput
    /**
     * Limit how many AsignacionRutinas to delete.
     */
    limit?: number
  }

  /**
   * AsignacionRutina.registros
   */
  export type AsignacionRutina$registrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroProgreso
     */
    select?: RegistroProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroProgreso
     */
    omit?: RegistroProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroProgresoInclude<ExtArgs> | null
    where?: RegistroProgresoWhereInput
    orderBy?: RegistroProgresoOrderByWithRelationInput | RegistroProgresoOrderByWithRelationInput[]
    cursor?: RegistroProgresoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistroProgresoScalarFieldEnum | RegistroProgresoScalarFieldEnum[]
  }

  /**
   * AsignacionRutina without action
   */
  export type AsignacionRutinaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionRutina
     */
    select?: AsignacionRutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionRutina
     */
    omit?: AsignacionRutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionRutinaInclude<ExtArgs> | null
  }


  /**
   * Model RegistroProgreso
   */

  export type AggregateRegistroProgreso = {
    _count: RegistroProgresoCountAggregateOutputType | null
    _avg: RegistroProgresoAvgAggregateOutputType | null
    _sum: RegistroProgresoSumAggregateOutputType | null
    _min: RegistroProgresoMinAggregateOutputType | null
    _max: RegistroProgresoMaxAggregateOutputType | null
  }

  export type RegistroProgresoAvgAggregateOutputType = {
    setsRealizados: number | null
    repeticionesMax: number | null
    cargaLevantada: Decimal | null
  }

  export type RegistroProgresoSumAggregateOutputType = {
    setsRealizados: number | null
    repeticionesMax: number | null
    cargaLevantada: Decimal | null
  }

  export type RegistroProgresoMinAggregateOutputType = {
    id: string | null
    asignacionId: string | null
    ejercicioId: string | null
    fechaRegistro: Date | null
    setsRealizados: number | null
    repeticionesMax: number | null
    cargaLevantada: Decimal | null
    notasEntrenador: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RegistroProgresoMaxAggregateOutputType = {
    id: string | null
    asignacionId: string | null
    ejercicioId: string | null
    fechaRegistro: Date | null
    setsRealizados: number | null
    repeticionesMax: number | null
    cargaLevantada: Decimal | null
    notasEntrenador: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RegistroProgresoCountAggregateOutputType = {
    id: number
    asignacionId: number
    ejercicioId: number
    fechaRegistro: number
    setsRealizados: number
    repeticionesMax: number
    cargaLevantada: number
    notasEntrenador: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RegistroProgresoAvgAggregateInputType = {
    setsRealizados?: true
    repeticionesMax?: true
    cargaLevantada?: true
  }

  export type RegistroProgresoSumAggregateInputType = {
    setsRealizados?: true
    repeticionesMax?: true
    cargaLevantada?: true
  }

  export type RegistroProgresoMinAggregateInputType = {
    id?: true
    asignacionId?: true
    ejercicioId?: true
    fechaRegistro?: true
    setsRealizados?: true
    repeticionesMax?: true
    cargaLevantada?: true
    notasEntrenador?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RegistroProgresoMaxAggregateInputType = {
    id?: true
    asignacionId?: true
    ejercicioId?: true
    fechaRegistro?: true
    setsRealizados?: true
    repeticionesMax?: true
    cargaLevantada?: true
    notasEntrenador?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RegistroProgresoCountAggregateInputType = {
    id?: true
    asignacionId?: true
    ejercicioId?: true
    fechaRegistro?: true
    setsRealizados?: true
    repeticionesMax?: true
    cargaLevantada?: true
    notasEntrenador?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RegistroProgresoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistroProgreso to aggregate.
     */
    where?: RegistroProgresoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroProgresos to fetch.
     */
    orderBy?: RegistroProgresoOrderByWithRelationInput | RegistroProgresoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistroProgresoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroProgresos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroProgresos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegistroProgresos
    **/
    _count?: true | RegistroProgresoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegistroProgresoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegistroProgresoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistroProgresoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistroProgresoMaxAggregateInputType
  }

  export type GetRegistroProgresoAggregateType<T extends RegistroProgresoAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistroProgreso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistroProgreso[P]>
      : GetScalarType<T[P], AggregateRegistroProgreso[P]>
  }




  export type RegistroProgresoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroProgresoWhereInput
    orderBy?: RegistroProgresoOrderByWithAggregationInput | RegistroProgresoOrderByWithAggregationInput[]
    by: RegistroProgresoScalarFieldEnum[] | RegistroProgresoScalarFieldEnum
    having?: RegistroProgresoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistroProgresoCountAggregateInputType | true
    _avg?: RegistroProgresoAvgAggregateInputType
    _sum?: RegistroProgresoSumAggregateInputType
    _min?: RegistroProgresoMinAggregateInputType
    _max?: RegistroProgresoMaxAggregateInputType
  }

  export type RegistroProgresoGroupByOutputType = {
    id: string
    asignacionId: string
    ejercicioId: string
    fechaRegistro: Date
    setsRealizados: number
    repeticionesMax: number
    cargaLevantada: Decimal
    notasEntrenador: string | null
    createdAt: Date
    updatedAt: Date
    _count: RegistroProgresoCountAggregateOutputType | null
    _avg: RegistroProgresoAvgAggregateOutputType | null
    _sum: RegistroProgresoSumAggregateOutputType | null
    _min: RegistroProgresoMinAggregateOutputType | null
    _max: RegistroProgresoMaxAggregateOutputType | null
  }

  type GetRegistroProgresoGroupByPayload<T extends RegistroProgresoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistroProgresoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistroProgresoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistroProgresoGroupByOutputType[P]>
            : GetScalarType<T[P], RegistroProgresoGroupByOutputType[P]>
        }
      >
    >


  export type RegistroProgresoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    asignacionId?: boolean
    ejercicioId?: boolean
    fechaRegistro?: boolean
    setsRealizados?: boolean
    repeticionesMax?: boolean
    cargaLevantada?: boolean
    notasEntrenador?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    asignacion?: boolean | AsignacionRutinaDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registroProgreso"]>

  export type RegistroProgresoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    asignacionId?: boolean
    ejercicioId?: boolean
    fechaRegistro?: boolean
    setsRealizados?: boolean
    repeticionesMax?: boolean
    cargaLevantada?: boolean
    notasEntrenador?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    asignacion?: boolean | AsignacionRutinaDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registroProgreso"]>

  export type RegistroProgresoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    asignacionId?: boolean
    ejercicioId?: boolean
    fechaRegistro?: boolean
    setsRealizados?: boolean
    repeticionesMax?: boolean
    cargaLevantada?: boolean
    notasEntrenador?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    asignacion?: boolean | AsignacionRutinaDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registroProgreso"]>

  export type RegistroProgresoSelectScalar = {
    id?: boolean
    asignacionId?: boolean
    ejercicioId?: boolean
    fechaRegistro?: boolean
    setsRealizados?: boolean
    repeticionesMax?: boolean
    cargaLevantada?: boolean
    notasEntrenador?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RegistroProgresoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "asignacionId" | "ejercicioId" | "fechaRegistro" | "setsRealizados" | "repeticionesMax" | "cargaLevantada" | "notasEntrenador" | "createdAt" | "updatedAt", ExtArgs["result"]["registroProgreso"]>
  export type RegistroProgresoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asignacion?: boolean | AsignacionRutinaDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }
  export type RegistroProgresoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asignacion?: boolean | AsignacionRutinaDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }
  export type RegistroProgresoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asignacion?: boolean | AsignacionRutinaDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }

  export type $RegistroProgresoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegistroProgreso"
    objects: {
      asignacion: Prisma.$AsignacionRutinaPayload<ExtArgs>
      ejercicio: Prisma.$EjercicioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      asignacionId: string
      ejercicioId: string
      fechaRegistro: Date
      setsRealizados: number
      repeticionesMax: number
      cargaLevantada: Prisma.Decimal
      notasEntrenador: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["registroProgreso"]>
    composites: {}
  }

  type RegistroProgresoGetPayload<S extends boolean | null | undefined | RegistroProgresoDefaultArgs> = $Result.GetResult<Prisma.$RegistroProgresoPayload, S>

  type RegistroProgresoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegistroProgresoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistroProgresoCountAggregateInputType | true
    }

  export interface RegistroProgresoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegistroProgreso'], meta: { name: 'RegistroProgreso' } }
    /**
     * Find zero or one RegistroProgreso that matches the filter.
     * @param {RegistroProgresoFindUniqueArgs} args - Arguments to find a RegistroProgreso
     * @example
     * // Get one RegistroProgreso
     * const registroProgreso = await prisma.registroProgreso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistroProgresoFindUniqueArgs>(args: SelectSubset<T, RegistroProgresoFindUniqueArgs<ExtArgs>>): Prisma__RegistroProgresoClient<$Result.GetResult<Prisma.$RegistroProgresoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RegistroProgreso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegistroProgresoFindUniqueOrThrowArgs} args - Arguments to find a RegistroProgreso
     * @example
     * // Get one RegistroProgreso
     * const registroProgreso = await prisma.registroProgreso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistroProgresoFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistroProgresoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistroProgresoClient<$Result.GetResult<Prisma.$RegistroProgresoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistroProgreso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroProgresoFindFirstArgs} args - Arguments to find a RegistroProgreso
     * @example
     * // Get one RegistroProgreso
     * const registroProgreso = await prisma.registroProgreso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistroProgresoFindFirstArgs>(args?: SelectSubset<T, RegistroProgresoFindFirstArgs<ExtArgs>>): Prisma__RegistroProgresoClient<$Result.GetResult<Prisma.$RegistroProgresoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistroProgreso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroProgresoFindFirstOrThrowArgs} args - Arguments to find a RegistroProgreso
     * @example
     * // Get one RegistroProgreso
     * const registroProgreso = await prisma.registroProgreso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistroProgresoFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistroProgresoFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistroProgresoClient<$Result.GetResult<Prisma.$RegistroProgresoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RegistroProgresos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroProgresoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegistroProgresos
     * const registroProgresos = await prisma.registroProgreso.findMany()
     * 
     * // Get first 10 RegistroProgresos
     * const registroProgresos = await prisma.registroProgreso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registroProgresoWithIdOnly = await prisma.registroProgreso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistroProgresoFindManyArgs>(args?: SelectSubset<T, RegistroProgresoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroProgresoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RegistroProgreso.
     * @param {RegistroProgresoCreateArgs} args - Arguments to create a RegistroProgreso.
     * @example
     * // Create one RegistroProgreso
     * const RegistroProgreso = await prisma.registroProgreso.create({
     *   data: {
     *     // ... data to create a RegistroProgreso
     *   }
     * })
     * 
     */
    create<T extends RegistroProgresoCreateArgs>(args: SelectSubset<T, RegistroProgresoCreateArgs<ExtArgs>>): Prisma__RegistroProgresoClient<$Result.GetResult<Prisma.$RegistroProgresoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RegistroProgresos.
     * @param {RegistroProgresoCreateManyArgs} args - Arguments to create many RegistroProgresos.
     * @example
     * // Create many RegistroProgresos
     * const registroProgreso = await prisma.registroProgreso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistroProgresoCreateManyArgs>(args?: SelectSubset<T, RegistroProgresoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RegistroProgresos and returns the data saved in the database.
     * @param {RegistroProgresoCreateManyAndReturnArgs} args - Arguments to create many RegistroProgresos.
     * @example
     * // Create many RegistroProgresos
     * const registroProgreso = await prisma.registroProgreso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RegistroProgresos and only return the `id`
     * const registroProgresoWithIdOnly = await prisma.registroProgreso.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegistroProgresoCreateManyAndReturnArgs>(args?: SelectSubset<T, RegistroProgresoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroProgresoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RegistroProgreso.
     * @param {RegistroProgresoDeleteArgs} args - Arguments to delete one RegistroProgreso.
     * @example
     * // Delete one RegistroProgreso
     * const RegistroProgreso = await prisma.registroProgreso.delete({
     *   where: {
     *     // ... filter to delete one RegistroProgreso
     *   }
     * })
     * 
     */
    delete<T extends RegistroProgresoDeleteArgs>(args: SelectSubset<T, RegistroProgresoDeleteArgs<ExtArgs>>): Prisma__RegistroProgresoClient<$Result.GetResult<Prisma.$RegistroProgresoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RegistroProgreso.
     * @param {RegistroProgresoUpdateArgs} args - Arguments to update one RegistroProgreso.
     * @example
     * // Update one RegistroProgreso
     * const registroProgreso = await prisma.registroProgreso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistroProgresoUpdateArgs>(args: SelectSubset<T, RegistroProgresoUpdateArgs<ExtArgs>>): Prisma__RegistroProgresoClient<$Result.GetResult<Prisma.$RegistroProgresoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RegistroProgresos.
     * @param {RegistroProgresoDeleteManyArgs} args - Arguments to filter RegistroProgresos to delete.
     * @example
     * // Delete a few RegistroProgresos
     * const { count } = await prisma.registroProgreso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistroProgresoDeleteManyArgs>(args?: SelectSubset<T, RegistroProgresoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistroProgresos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroProgresoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegistroProgresos
     * const registroProgreso = await prisma.registroProgreso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistroProgresoUpdateManyArgs>(args: SelectSubset<T, RegistroProgresoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistroProgresos and returns the data updated in the database.
     * @param {RegistroProgresoUpdateManyAndReturnArgs} args - Arguments to update many RegistroProgresos.
     * @example
     * // Update many RegistroProgresos
     * const registroProgreso = await prisma.registroProgreso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RegistroProgresos and only return the `id`
     * const registroProgresoWithIdOnly = await prisma.registroProgreso.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RegistroProgresoUpdateManyAndReturnArgs>(args: SelectSubset<T, RegistroProgresoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroProgresoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RegistroProgreso.
     * @param {RegistroProgresoUpsertArgs} args - Arguments to update or create a RegistroProgreso.
     * @example
     * // Update or create a RegistroProgreso
     * const registroProgreso = await prisma.registroProgreso.upsert({
     *   create: {
     *     // ... data to create a RegistroProgreso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegistroProgreso we want to update
     *   }
     * })
     */
    upsert<T extends RegistroProgresoUpsertArgs>(args: SelectSubset<T, RegistroProgresoUpsertArgs<ExtArgs>>): Prisma__RegistroProgresoClient<$Result.GetResult<Prisma.$RegistroProgresoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RegistroProgresos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroProgresoCountArgs} args - Arguments to filter RegistroProgresos to count.
     * @example
     * // Count the number of RegistroProgresos
     * const count = await prisma.registroProgreso.count({
     *   where: {
     *     // ... the filter for the RegistroProgresos we want to count
     *   }
     * })
    **/
    count<T extends RegistroProgresoCountArgs>(
      args?: Subset<T, RegistroProgresoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistroProgresoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegistroProgreso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroProgresoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegistroProgresoAggregateArgs>(args: Subset<T, RegistroProgresoAggregateArgs>): Prisma.PrismaPromise<GetRegistroProgresoAggregateType<T>>

    /**
     * Group by RegistroProgreso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroProgresoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RegistroProgresoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistroProgresoGroupByArgs['orderBy'] }
        : { orderBy?: RegistroProgresoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegistroProgresoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistroProgresoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegistroProgreso model
   */
  readonly fields: RegistroProgresoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegistroProgreso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistroProgresoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asignacion<T extends AsignacionRutinaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AsignacionRutinaDefaultArgs<ExtArgs>>): Prisma__AsignacionRutinaClient<$Result.GetResult<Prisma.$AsignacionRutinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ejercicio<T extends EjercicioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EjercicioDefaultArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RegistroProgreso model
   */
  interface RegistroProgresoFieldRefs {
    readonly id: FieldRef<"RegistroProgreso", 'String'>
    readonly asignacionId: FieldRef<"RegistroProgreso", 'String'>
    readonly ejercicioId: FieldRef<"RegistroProgreso", 'String'>
    readonly fechaRegistro: FieldRef<"RegistroProgreso", 'DateTime'>
    readonly setsRealizados: FieldRef<"RegistroProgreso", 'Int'>
    readonly repeticionesMax: FieldRef<"RegistroProgreso", 'Int'>
    readonly cargaLevantada: FieldRef<"RegistroProgreso", 'Decimal'>
    readonly notasEntrenador: FieldRef<"RegistroProgreso", 'String'>
    readonly createdAt: FieldRef<"RegistroProgreso", 'DateTime'>
    readonly updatedAt: FieldRef<"RegistroProgreso", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RegistroProgreso findUnique
   */
  export type RegistroProgresoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroProgreso
     */
    select?: RegistroProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroProgreso
     */
    omit?: RegistroProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroProgresoInclude<ExtArgs> | null
    /**
     * Filter, which RegistroProgreso to fetch.
     */
    where: RegistroProgresoWhereUniqueInput
  }

  /**
   * RegistroProgreso findUniqueOrThrow
   */
  export type RegistroProgresoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroProgreso
     */
    select?: RegistroProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroProgreso
     */
    omit?: RegistroProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroProgresoInclude<ExtArgs> | null
    /**
     * Filter, which RegistroProgreso to fetch.
     */
    where: RegistroProgresoWhereUniqueInput
  }

  /**
   * RegistroProgreso findFirst
   */
  export type RegistroProgresoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroProgreso
     */
    select?: RegistroProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroProgreso
     */
    omit?: RegistroProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroProgresoInclude<ExtArgs> | null
    /**
     * Filter, which RegistroProgreso to fetch.
     */
    where?: RegistroProgresoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroProgresos to fetch.
     */
    orderBy?: RegistroProgresoOrderByWithRelationInput | RegistroProgresoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistroProgresos.
     */
    cursor?: RegistroProgresoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroProgresos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroProgresos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroProgresos.
     */
    distinct?: RegistroProgresoScalarFieldEnum | RegistroProgresoScalarFieldEnum[]
  }

  /**
   * RegistroProgreso findFirstOrThrow
   */
  export type RegistroProgresoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroProgreso
     */
    select?: RegistroProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroProgreso
     */
    omit?: RegistroProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroProgresoInclude<ExtArgs> | null
    /**
     * Filter, which RegistroProgreso to fetch.
     */
    where?: RegistroProgresoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroProgresos to fetch.
     */
    orderBy?: RegistroProgresoOrderByWithRelationInput | RegistroProgresoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistroProgresos.
     */
    cursor?: RegistroProgresoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroProgresos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroProgresos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroProgresos.
     */
    distinct?: RegistroProgresoScalarFieldEnum | RegistroProgresoScalarFieldEnum[]
  }

  /**
   * RegistroProgreso findMany
   */
  export type RegistroProgresoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroProgreso
     */
    select?: RegistroProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroProgreso
     */
    omit?: RegistroProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroProgresoInclude<ExtArgs> | null
    /**
     * Filter, which RegistroProgresos to fetch.
     */
    where?: RegistroProgresoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroProgresos to fetch.
     */
    orderBy?: RegistroProgresoOrderByWithRelationInput | RegistroProgresoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegistroProgresos.
     */
    cursor?: RegistroProgresoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroProgresos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroProgresos.
     */
    skip?: number
    distinct?: RegistroProgresoScalarFieldEnum | RegistroProgresoScalarFieldEnum[]
  }

  /**
   * RegistroProgreso create
   */
  export type RegistroProgresoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroProgreso
     */
    select?: RegistroProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroProgreso
     */
    omit?: RegistroProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroProgresoInclude<ExtArgs> | null
    /**
     * The data needed to create a RegistroProgreso.
     */
    data: XOR<RegistroProgresoCreateInput, RegistroProgresoUncheckedCreateInput>
  }

  /**
   * RegistroProgreso createMany
   */
  export type RegistroProgresoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegistroProgresos.
     */
    data: RegistroProgresoCreateManyInput | RegistroProgresoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegistroProgreso createManyAndReturn
   */
  export type RegistroProgresoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroProgreso
     */
    select?: RegistroProgresoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroProgreso
     */
    omit?: RegistroProgresoOmit<ExtArgs> | null
    /**
     * The data used to create many RegistroProgresos.
     */
    data: RegistroProgresoCreateManyInput | RegistroProgresoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroProgresoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RegistroProgreso update
   */
  export type RegistroProgresoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroProgreso
     */
    select?: RegistroProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroProgreso
     */
    omit?: RegistroProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroProgresoInclude<ExtArgs> | null
    /**
     * The data needed to update a RegistroProgreso.
     */
    data: XOR<RegistroProgresoUpdateInput, RegistroProgresoUncheckedUpdateInput>
    /**
     * Choose, which RegistroProgreso to update.
     */
    where: RegistroProgresoWhereUniqueInput
  }

  /**
   * RegistroProgreso updateMany
   */
  export type RegistroProgresoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegistroProgresos.
     */
    data: XOR<RegistroProgresoUpdateManyMutationInput, RegistroProgresoUncheckedUpdateManyInput>
    /**
     * Filter which RegistroProgresos to update
     */
    where?: RegistroProgresoWhereInput
    /**
     * Limit how many RegistroProgresos to update.
     */
    limit?: number
  }

  /**
   * RegistroProgreso updateManyAndReturn
   */
  export type RegistroProgresoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroProgreso
     */
    select?: RegistroProgresoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroProgreso
     */
    omit?: RegistroProgresoOmit<ExtArgs> | null
    /**
     * The data used to update RegistroProgresos.
     */
    data: XOR<RegistroProgresoUpdateManyMutationInput, RegistroProgresoUncheckedUpdateManyInput>
    /**
     * Filter which RegistroProgresos to update
     */
    where?: RegistroProgresoWhereInput
    /**
     * Limit how many RegistroProgresos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroProgresoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RegistroProgreso upsert
   */
  export type RegistroProgresoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroProgreso
     */
    select?: RegistroProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroProgreso
     */
    omit?: RegistroProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroProgresoInclude<ExtArgs> | null
    /**
     * The filter to search for the RegistroProgreso to update in case it exists.
     */
    where: RegistroProgresoWhereUniqueInput
    /**
     * In case the RegistroProgreso found by the `where` argument doesn't exist, create a new RegistroProgreso with this data.
     */
    create: XOR<RegistroProgresoCreateInput, RegistroProgresoUncheckedCreateInput>
    /**
     * In case the RegistroProgreso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistroProgresoUpdateInput, RegistroProgresoUncheckedUpdateInput>
  }

  /**
   * RegistroProgreso delete
   */
  export type RegistroProgresoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroProgreso
     */
    select?: RegistroProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroProgreso
     */
    omit?: RegistroProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroProgresoInclude<ExtArgs> | null
    /**
     * Filter which RegistroProgreso to delete.
     */
    where: RegistroProgresoWhereUniqueInput
  }

  /**
   * RegistroProgreso deleteMany
   */
  export type RegistroProgresoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistroProgresos to delete
     */
    where?: RegistroProgresoWhereInput
    /**
     * Limit how many RegistroProgresos to delete.
     */
    limit?: number
  }

  /**
   * RegistroProgreso without action
   */
  export type RegistroProgresoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroProgreso
     */
    select?: RegistroProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroProgreso
     */
    omit?: RegistroProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroProgresoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EjercicioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    musculoObjetivo: 'musculoObjetivo',
    urlVideo: 'urlVideo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EjercicioScalarFieldEnum = (typeof EjercicioScalarFieldEnum)[keyof typeof EjercicioScalarFieldEnum]


  export const RutinaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    creadorId: 'creadorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RutinaScalarFieldEnum = (typeof RutinaScalarFieldEnum)[keyof typeof RutinaScalarFieldEnum]


  export const RutinaEjercicioScalarFieldEnum: {
    id: 'id',
    rutinaId: 'rutinaId',
    ejercicioId: 'ejercicioId',
    series: 'series',
    repeticiones: 'repeticiones',
    cargaSugerida: 'cargaSugerida',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RutinaEjercicioScalarFieldEnum = (typeof RutinaEjercicioScalarFieldEnum)[keyof typeof RutinaEjercicioScalarFieldEnum]


  export const AsignacionRutinaScalarFieldEnum: {
    id: 'id',
    clienteId: 'clienteId',
    entrenadorId: 'entrenadorId',
    rutinaId: 'rutinaId',
    fechaInicio: 'fechaInicio',
    fechaFin: 'fechaFin',
    activa: 'activa',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AsignacionRutinaScalarFieldEnum = (typeof AsignacionRutinaScalarFieldEnum)[keyof typeof AsignacionRutinaScalarFieldEnum]


  export const RegistroProgresoScalarFieldEnum: {
    id: 'id',
    asignacionId: 'asignacionId',
    ejercicioId: 'ejercicioId',
    fechaRegistro: 'fechaRegistro',
    setsRealizados: 'setsRealizados',
    repeticionesMax: 'repeticionesMax',
    cargaLevantada: 'cargaLevantada',
    notasEntrenador: 'notasEntrenador',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RegistroProgresoScalarFieldEnum = (typeof RegistroProgresoScalarFieldEnum)[keyof typeof RegistroProgresoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type EjercicioWhereInput = {
    AND?: EjercicioWhereInput | EjercicioWhereInput[]
    OR?: EjercicioWhereInput[]
    NOT?: EjercicioWhereInput | EjercicioWhereInput[]
    id?: StringFilter<"Ejercicio"> | string
    nombre?: StringFilter<"Ejercicio"> | string
    descripcion?: StringFilter<"Ejercicio"> | string
    musculoObjetivo?: StringFilter<"Ejercicio"> | string
    urlVideo?: StringNullableFilter<"Ejercicio"> | string | null
    createdAt?: DateTimeFilter<"Ejercicio"> | Date | string
    updatedAt?: DateTimeFilter<"Ejercicio"> | Date | string
    rutinaEjercicios?: RutinaEjercicioListRelationFilter
    registrosProgreso?: RegistroProgresoListRelationFilter
  }

  export type EjercicioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    musculoObjetivo?: SortOrder
    urlVideo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rutinaEjercicios?: RutinaEjercicioOrderByRelationAggregateInput
    registrosProgreso?: RegistroProgresoOrderByRelationAggregateInput
  }

  export type EjercicioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EjercicioWhereInput | EjercicioWhereInput[]
    OR?: EjercicioWhereInput[]
    NOT?: EjercicioWhereInput | EjercicioWhereInput[]
    nombre?: StringFilter<"Ejercicio"> | string
    descripcion?: StringFilter<"Ejercicio"> | string
    musculoObjetivo?: StringFilter<"Ejercicio"> | string
    urlVideo?: StringNullableFilter<"Ejercicio"> | string | null
    createdAt?: DateTimeFilter<"Ejercicio"> | Date | string
    updatedAt?: DateTimeFilter<"Ejercicio"> | Date | string
    rutinaEjercicios?: RutinaEjercicioListRelationFilter
    registrosProgreso?: RegistroProgresoListRelationFilter
  }, "id">

  export type EjercicioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    musculoObjetivo?: SortOrder
    urlVideo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EjercicioCountOrderByAggregateInput
    _max?: EjercicioMaxOrderByAggregateInput
    _min?: EjercicioMinOrderByAggregateInput
  }

  export type EjercicioScalarWhereWithAggregatesInput = {
    AND?: EjercicioScalarWhereWithAggregatesInput | EjercicioScalarWhereWithAggregatesInput[]
    OR?: EjercicioScalarWhereWithAggregatesInput[]
    NOT?: EjercicioScalarWhereWithAggregatesInput | EjercicioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ejercicio"> | string
    nombre?: StringWithAggregatesFilter<"Ejercicio"> | string
    descripcion?: StringWithAggregatesFilter<"Ejercicio"> | string
    musculoObjetivo?: StringWithAggregatesFilter<"Ejercicio"> | string
    urlVideo?: StringNullableWithAggregatesFilter<"Ejercicio"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Ejercicio"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ejercicio"> | Date | string
  }

  export type RutinaWhereInput = {
    AND?: RutinaWhereInput | RutinaWhereInput[]
    OR?: RutinaWhereInput[]
    NOT?: RutinaWhereInput | RutinaWhereInput[]
    id?: StringFilter<"Rutina"> | string
    nombre?: StringFilter<"Rutina"> | string
    creadorId?: StringFilter<"Rutina"> | string
    createdAt?: DateTimeFilter<"Rutina"> | Date | string
    updatedAt?: DateTimeFilter<"Rutina"> | Date | string
    ejercicios?: RutinaEjercicioListRelationFilter
    asignaciones?: AsignacionRutinaListRelationFilter
  }

  export type RutinaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    creadorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ejercicios?: RutinaEjercicioOrderByRelationAggregateInput
    asignaciones?: AsignacionRutinaOrderByRelationAggregateInput
  }

  export type RutinaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RutinaWhereInput | RutinaWhereInput[]
    OR?: RutinaWhereInput[]
    NOT?: RutinaWhereInput | RutinaWhereInput[]
    nombre?: StringFilter<"Rutina"> | string
    creadorId?: StringFilter<"Rutina"> | string
    createdAt?: DateTimeFilter<"Rutina"> | Date | string
    updatedAt?: DateTimeFilter<"Rutina"> | Date | string
    ejercicios?: RutinaEjercicioListRelationFilter
    asignaciones?: AsignacionRutinaListRelationFilter
  }, "id">

  export type RutinaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    creadorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RutinaCountOrderByAggregateInput
    _max?: RutinaMaxOrderByAggregateInput
    _min?: RutinaMinOrderByAggregateInput
  }

  export type RutinaScalarWhereWithAggregatesInput = {
    AND?: RutinaScalarWhereWithAggregatesInput | RutinaScalarWhereWithAggregatesInput[]
    OR?: RutinaScalarWhereWithAggregatesInput[]
    NOT?: RutinaScalarWhereWithAggregatesInput | RutinaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rutina"> | string
    nombre?: StringWithAggregatesFilter<"Rutina"> | string
    creadorId?: StringWithAggregatesFilter<"Rutina"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Rutina"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rutina"> | Date | string
  }

  export type RutinaEjercicioWhereInput = {
    AND?: RutinaEjercicioWhereInput | RutinaEjercicioWhereInput[]
    OR?: RutinaEjercicioWhereInput[]
    NOT?: RutinaEjercicioWhereInput | RutinaEjercicioWhereInput[]
    id?: StringFilter<"RutinaEjercicio"> | string
    rutinaId?: StringFilter<"RutinaEjercicio"> | string
    ejercicioId?: StringFilter<"RutinaEjercicio"> | string
    series?: IntFilter<"RutinaEjercicio"> | number
    repeticiones?: StringFilter<"RutinaEjercicio"> | string
    cargaSugerida?: StringFilter<"RutinaEjercicio"> | string
    createdAt?: DateTimeFilter<"RutinaEjercicio"> | Date | string
    updatedAt?: DateTimeFilter<"RutinaEjercicio"> | Date | string
    rutina?: XOR<RutinaScalarRelationFilter, RutinaWhereInput>
    ejercicio?: XOR<EjercicioScalarRelationFilter, EjercicioWhereInput>
  }

  export type RutinaEjercicioOrderByWithRelationInput = {
    id?: SortOrder
    rutinaId?: SortOrder
    ejercicioId?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
    cargaSugerida?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rutina?: RutinaOrderByWithRelationInput
    ejercicio?: EjercicioOrderByWithRelationInput
  }

  export type RutinaEjercicioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RutinaEjercicioWhereInput | RutinaEjercicioWhereInput[]
    OR?: RutinaEjercicioWhereInput[]
    NOT?: RutinaEjercicioWhereInput | RutinaEjercicioWhereInput[]
    rutinaId?: StringFilter<"RutinaEjercicio"> | string
    ejercicioId?: StringFilter<"RutinaEjercicio"> | string
    series?: IntFilter<"RutinaEjercicio"> | number
    repeticiones?: StringFilter<"RutinaEjercicio"> | string
    cargaSugerida?: StringFilter<"RutinaEjercicio"> | string
    createdAt?: DateTimeFilter<"RutinaEjercicio"> | Date | string
    updatedAt?: DateTimeFilter<"RutinaEjercicio"> | Date | string
    rutina?: XOR<RutinaScalarRelationFilter, RutinaWhereInput>
    ejercicio?: XOR<EjercicioScalarRelationFilter, EjercicioWhereInput>
  }, "id">

  export type RutinaEjercicioOrderByWithAggregationInput = {
    id?: SortOrder
    rutinaId?: SortOrder
    ejercicioId?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
    cargaSugerida?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RutinaEjercicioCountOrderByAggregateInput
    _avg?: RutinaEjercicioAvgOrderByAggregateInput
    _max?: RutinaEjercicioMaxOrderByAggregateInput
    _min?: RutinaEjercicioMinOrderByAggregateInput
    _sum?: RutinaEjercicioSumOrderByAggregateInput
  }

  export type RutinaEjercicioScalarWhereWithAggregatesInput = {
    AND?: RutinaEjercicioScalarWhereWithAggregatesInput | RutinaEjercicioScalarWhereWithAggregatesInput[]
    OR?: RutinaEjercicioScalarWhereWithAggregatesInput[]
    NOT?: RutinaEjercicioScalarWhereWithAggregatesInput | RutinaEjercicioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RutinaEjercicio"> | string
    rutinaId?: StringWithAggregatesFilter<"RutinaEjercicio"> | string
    ejercicioId?: StringWithAggregatesFilter<"RutinaEjercicio"> | string
    series?: IntWithAggregatesFilter<"RutinaEjercicio"> | number
    repeticiones?: StringWithAggregatesFilter<"RutinaEjercicio"> | string
    cargaSugerida?: StringWithAggregatesFilter<"RutinaEjercicio"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RutinaEjercicio"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RutinaEjercicio"> | Date | string
  }

  export type AsignacionRutinaWhereInput = {
    AND?: AsignacionRutinaWhereInput | AsignacionRutinaWhereInput[]
    OR?: AsignacionRutinaWhereInput[]
    NOT?: AsignacionRutinaWhereInput | AsignacionRutinaWhereInput[]
    id?: StringFilter<"AsignacionRutina"> | string
    clienteId?: StringFilter<"AsignacionRutina"> | string
    entrenadorId?: StringFilter<"AsignacionRutina"> | string
    rutinaId?: StringFilter<"AsignacionRutina"> | string
    fechaInicio?: DateTimeFilter<"AsignacionRutina"> | Date | string
    fechaFin?: DateTimeFilter<"AsignacionRutina"> | Date | string
    activa?: BoolFilter<"AsignacionRutina"> | boolean
    createdAt?: DateTimeFilter<"AsignacionRutina"> | Date | string
    updatedAt?: DateTimeFilter<"AsignacionRutina"> | Date | string
    rutina?: XOR<RutinaScalarRelationFilter, RutinaWhereInput>
    registros?: RegistroProgresoListRelationFilter
  }

  export type AsignacionRutinaOrderByWithRelationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    entrenadorId?: SortOrder
    rutinaId?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rutina?: RutinaOrderByWithRelationInput
    registros?: RegistroProgresoOrderByRelationAggregateInput
  }

  export type AsignacionRutinaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AsignacionRutinaWhereInput | AsignacionRutinaWhereInput[]
    OR?: AsignacionRutinaWhereInput[]
    NOT?: AsignacionRutinaWhereInput | AsignacionRutinaWhereInput[]
    clienteId?: StringFilter<"AsignacionRutina"> | string
    entrenadorId?: StringFilter<"AsignacionRutina"> | string
    rutinaId?: StringFilter<"AsignacionRutina"> | string
    fechaInicio?: DateTimeFilter<"AsignacionRutina"> | Date | string
    fechaFin?: DateTimeFilter<"AsignacionRutina"> | Date | string
    activa?: BoolFilter<"AsignacionRutina"> | boolean
    createdAt?: DateTimeFilter<"AsignacionRutina"> | Date | string
    updatedAt?: DateTimeFilter<"AsignacionRutina"> | Date | string
    rutina?: XOR<RutinaScalarRelationFilter, RutinaWhereInput>
    registros?: RegistroProgresoListRelationFilter
  }, "id">

  export type AsignacionRutinaOrderByWithAggregationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    entrenadorId?: SortOrder
    rutinaId?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AsignacionRutinaCountOrderByAggregateInput
    _max?: AsignacionRutinaMaxOrderByAggregateInput
    _min?: AsignacionRutinaMinOrderByAggregateInput
  }

  export type AsignacionRutinaScalarWhereWithAggregatesInput = {
    AND?: AsignacionRutinaScalarWhereWithAggregatesInput | AsignacionRutinaScalarWhereWithAggregatesInput[]
    OR?: AsignacionRutinaScalarWhereWithAggregatesInput[]
    NOT?: AsignacionRutinaScalarWhereWithAggregatesInput | AsignacionRutinaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AsignacionRutina"> | string
    clienteId?: StringWithAggregatesFilter<"AsignacionRutina"> | string
    entrenadorId?: StringWithAggregatesFilter<"AsignacionRutina"> | string
    rutinaId?: StringWithAggregatesFilter<"AsignacionRutina"> | string
    fechaInicio?: DateTimeWithAggregatesFilter<"AsignacionRutina"> | Date | string
    fechaFin?: DateTimeWithAggregatesFilter<"AsignacionRutina"> | Date | string
    activa?: BoolWithAggregatesFilter<"AsignacionRutina"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AsignacionRutina"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AsignacionRutina"> | Date | string
  }

  export type RegistroProgresoWhereInput = {
    AND?: RegistroProgresoWhereInput | RegistroProgresoWhereInput[]
    OR?: RegistroProgresoWhereInput[]
    NOT?: RegistroProgresoWhereInput | RegistroProgresoWhereInput[]
    id?: StringFilter<"RegistroProgreso"> | string
    asignacionId?: StringFilter<"RegistroProgreso"> | string
    ejercicioId?: StringFilter<"RegistroProgreso"> | string
    fechaRegistro?: DateTimeFilter<"RegistroProgreso"> | Date | string
    setsRealizados?: IntFilter<"RegistroProgreso"> | number
    repeticionesMax?: IntFilter<"RegistroProgreso"> | number
    cargaLevantada?: DecimalFilter<"RegistroProgreso"> | Decimal | DecimalJsLike | number | string
    notasEntrenador?: StringNullableFilter<"RegistroProgreso"> | string | null
    createdAt?: DateTimeFilter<"RegistroProgreso"> | Date | string
    updatedAt?: DateTimeFilter<"RegistroProgreso"> | Date | string
    asignacion?: XOR<AsignacionRutinaScalarRelationFilter, AsignacionRutinaWhereInput>
    ejercicio?: XOR<EjercicioScalarRelationFilter, EjercicioWhereInput>
  }

  export type RegistroProgresoOrderByWithRelationInput = {
    id?: SortOrder
    asignacionId?: SortOrder
    ejercicioId?: SortOrder
    fechaRegistro?: SortOrder
    setsRealizados?: SortOrder
    repeticionesMax?: SortOrder
    cargaLevantada?: SortOrder
    notasEntrenador?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    asignacion?: AsignacionRutinaOrderByWithRelationInput
    ejercicio?: EjercicioOrderByWithRelationInput
  }

  export type RegistroProgresoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RegistroProgresoWhereInput | RegistroProgresoWhereInput[]
    OR?: RegistroProgresoWhereInput[]
    NOT?: RegistroProgresoWhereInput | RegistroProgresoWhereInput[]
    asignacionId?: StringFilter<"RegistroProgreso"> | string
    ejercicioId?: StringFilter<"RegistroProgreso"> | string
    fechaRegistro?: DateTimeFilter<"RegistroProgreso"> | Date | string
    setsRealizados?: IntFilter<"RegistroProgreso"> | number
    repeticionesMax?: IntFilter<"RegistroProgreso"> | number
    cargaLevantada?: DecimalFilter<"RegistroProgreso"> | Decimal | DecimalJsLike | number | string
    notasEntrenador?: StringNullableFilter<"RegistroProgreso"> | string | null
    createdAt?: DateTimeFilter<"RegistroProgreso"> | Date | string
    updatedAt?: DateTimeFilter<"RegistroProgreso"> | Date | string
    asignacion?: XOR<AsignacionRutinaScalarRelationFilter, AsignacionRutinaWhereInput>
    ejercicio?: XOR<EjercicioScalarRelationFilter, EjercicioWhereInput>
  }, "id">

  export type RegistroProgresoOrderByWithAggregationInput = {
    id?: SortOrder
    asignacionId?: SortOrder
    ejercicioId?: SortOrder
    fechaRegistro?: SortOrder
    setsRealizados?: SortOrder
    repeticionesMax?: SortOrder
    cargaLevantada?: SortOrder
    notasEntrenador?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RegistroProgresoCountOrderByAggregateInput
    _avg?: RegistroProgresoAvgOrderByAggregateInput
    _max?: RegistroProgresoMaxOrderByAggregateInput
    _min?: RegistroProgresoMinOrderByAggregateInput
    _sum?: RegistroProgresoSumOrderByAggregateInput
  }

  export type RegistroProgresoScalarWhereWithAggregatesInput = {
    AND?: RegistroProgresoScalarWhereWithAggregatesInput | RegistroProgresoScalarWhereWithAggregatesInput[]
    OR?: RegistroProgresoScalarWhereWithAggregatesInput[]
    NOT?: RegistroProgresoScalarWhereWithAggregatesInput | RegistroProgresoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RegistroProgreso"> | string
    asignacionId?: StringWithAggregatesFilter<"RegistroProgreso"> | string
    ejercicioId?: StringWithAggregatesFilter<"RegistroProgreso"> | string
    fechaRegistro?: DateTimeWithAggregatesFilter<"RegistroProgreso"> | Date | string
    setsRealizados?: IntWithAggregatesFilter<"RegistroProgreso"> | number
    repeticionesMax?: IntWithAggregatesFilter<"RegistroProgreso"> | number
    cargaLevantada?: DecimalWithAggregatesFilter<"RegistroProgreso"> | Decimal | DecimalJsLike | number | string
    notasEntrenador?: StringNullableWithAggregatesFilter<"RegistroProgreso"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RegistroProgreso"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RegistroProgreso"> | Date | string
  }

  export type EjercicioCreateInput = {
    id?: string
    nombre: string
    descripcion: string
    musculoObjetivo: string
    urlVideo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rutinaEjercicios?: RutinaEjercicioCreateNestedManyWithoutEjercicioInput
    registrosProgreso?: RegistroProgresoCreateNestedManyWithoutEjercicioInput
  }

  export type EjercicioUncheckedCreateInput = {
    id?: string
    nombre: string
    descripcion: string
    musculoObjetivo: string
    urlVideo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rutinaEjercicios?: RutinaEjercicioUncheckedCreateNestedManyWithoutEjercicioInput
    registrosProgreso?: RegistroProgresoUncheckedCreateNestedManyWithoutEjercicioInput
  }

  export type EjercicioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    musculoObjetivo?: StringFieldUpdateOperationsInput | string
    urlVideo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rutinaEjercicios?: RutinaEjercicioUpdateManyWithoutEjercicioNestedInput
    registrosProgreso?: RegistroProgresoUpdateManyWithoutEjercicioNestedInput
  }

  export type EjercicioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    musculoObjetivo?: StringFieldUpdateOperationsInput | string
    urlVideo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rutinaEjercicios?: RutinaEjercicioUncheckedUpdateManyWithoutEjercicioNestedInput
    registrosProgreso?: RegistroProgresoUncheckedUpdateManyWithoutEjercicioNestedInput
  }

  export type EjercicioCreateManyInput = {
    id?: string
    nombre: string
    descripcion: string
    musculoObjetivo: string
    urlVideo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EjercicioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    musculoObjetivo?: StringFieldUpdateOperationsInput | string
    urlVideo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EjercicioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    musculoObjetivo?: StringFieldUpdateOperationsInput | string
    urlVideo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutinaCreateInput = {
    id?: string
    nombre: string
    creadorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ejercicios?: RutinaEjercicioCreateNestedManyWithoutRutinaInput
    asignaciones?: AsignacionRutinaCreateNestedManyWithoutRutinaInput
  }

  export type RutinaUncheckedCreateInput = {
    id?: string
    nombre: string
    creadorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ejercicios?: RutinaEjercicioUncheckedCreateNestedManyWithoutRutinaInput
    asignaciones?: AsignacionRutinaUncheckedCreateNestedManyWithoutRutinaInput
  }

  export type RutinaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    creadorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ejercicios?: RutinaEjercicioUpdateManyWithoutRutinaNestedInput
    asignaciones?: AsignacionRutinaUpdateManyWithoutRutinaNestedInput
  }

  export type RutinaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    creadorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ejercicios?: RutinaEjercicioUncheckedUpdateManyWithoutRutinaNestedInput
    asignaciones?: AsignacionRutinaUncheckedUpdateManyWithoutRutinaNestedInput
  }

  export type RutinaCreateManyInput = {
    id?: string
    nombre: string
    creadorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RutinaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    creadorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutinaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    creadorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutinaEjercicioCreateInput = {
    id?: string
    series: number
    repeticiones: string
    cargaSugerida: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rutina: RutinaCreateNestedOneWithoutEjerciciosInput
    ejercicio: EjercicioCreateNestedOneWithoutRutinaEjerciciosInput
  }

  export type RutinaEjercicioUncheckedCreateInput = {
    id?: string
    rutinaId: string
    ejercicioId: string
    series: number
    repeticiones: string
    cargaSugerida: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RutinaEjercicioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: StringFieldUpdateOperationsInput | string
    cargaSugerida?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rutina?: RutinaUpdateOneRequiredWithoutEjerciciosNestedInput
    ejercicio?: EjercicioUpdateOneRequiredWithoutRutinaEjerciciosNestedInput
  }

  export type RutinaEjercicioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rutinaId?: StringFieldUpdateOperationsInput | string
    ejercicioId?: StringFieldUpdateOperationsInput | string
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: StringFieldUpdateOperationsInput | string
    cargaSugerida?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutinaEjercicioCreateManyInput = {
    id?: string
    rutinaId: string
    ejercicioId: string
    series: number
    repeticiones: string
    cargaSugerida: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RutinaEjercicioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: StringFieldUpdateOperationsInput | string
    cargaSugerida?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutinaEjercicioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rutinaId?: StringFieldUpdateOperationsInput | string
    ejercicioId?: StringFieldUpdateOperationsInput | string
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: StringFieldUpdateOperationsInput | string
    cargaSugerida?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsignacionRutinaCreateInput = {
    id?: string
    clienteId: string
    entrenadorId: string
    fechaInicio: Date | string
    fechaFin: Date | string
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rutina: RutinaCreateNestedOneWithoutAsignacionesInput
    registros?: RegistroProgresoCreateNestedManyWithoutAsignacionInput
  }

  export type AsignacionRutinaUncheckedCreateInput = {
    id?: string
    clienteId: string
    entrenadorId: string
    rutinaId: string
    fechaInicio: Date | string
    fechaFin: Date | string
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    registros?: RegistroProgresoUncheckedCreateNestedManyWithoutAsignacionInput
  }

  export type AsignacionRutinaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    entrenadorId?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rutina?: RutinaUpdateOneRequiredWithoutAsignacionesNestedInput
    registros?: RegistroProgresoUpdateManyWithoutAsignacionNestedInput
  }

  export type AsignacionRutinaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    entrenadorId?: StringFieldUpdateOperationsInput | string
    rutinaId?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registros?: RegistroProgresoUncheckedUpdateManyWithoutAsignacionNestedInput
  }

  export type AsignacionRutinaCreateManyInput = {
    id?: string
    clienteId: string
    entrenadorId: string
    rutinaId: string
    fechaInicio: Date | string
    fechaFin: Date | string
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AsignacionRutinaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    entrenadorId?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsignacionRutinaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    entrenadorId?: StringFieldUpdateOperationsInput | string
    rutinaId?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroProgresoCreateInput = {
    id?: string
    fechaRegistro: Date | string
    setsRealizados: number
    repeticionesMax: number
    cargaLevantada: Decimal | DecimalJsLike | number | string
    notasEntrenador?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    asignacion: AsignacionRutinaCreateNestedOneWithoutRegistrosInput
    ejercicio: EjercicioCreateNestedOneWithoutRegistrosProgresoInput
  }

  export type RegistroProgresoUncheckedCreateInput = {
    id?: string
    asignacionId: string
    ejercicioId: string
    fechaRegistro: Date | string
    setsRealizados: number
    repeticionesMax: number
    cargaLevantada: Decimal | DecimalJsLike | number | string
    notasEntrenador?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistroProgresoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    setsRealizados?: IntFieldUpdateOperationsInput | number
    repeticionesMax?: IntFieldUpdateOperationsInput | number
    cargaLevantada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notasEntrenador?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asignacion?: AsignacionRutinaUpdateOneRequiredWithoutRegistrosNestedInput
    ejercicio?: EjercicioUpdateOneRequiredWithoutRegistrosProgresoNestedInput
  }

  export type RegistroProgresoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    asignacionId?: StringFieldUpdateOperationsInput | string
    ejercicioId?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    setsRealizados?: IntFieldUpdateOperationsInput | number
    repeticionesMax?: IntFieldUpdateOperationsInput | number
    cargaLevantada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notasEntrenador?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroProgresoCreateManyInput = {
    id?: string
    asignacionId: string
    ejercicioId: string
    fechaRegistro: Date | string
    setsRealizados: number
    repeticionesMax: number
    cargaLevantada: Decimal | DecimalJsLike | number | string
    notasEntrenador?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistroProgresoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    setsRealizados?: IntFieldUpdateOperationsInput | number
    repeticionesMax?: IntFieldUpdateOperationsInput | number
    cargaLevantada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notasEntrenador?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroProgresoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    asignacionId?: StringFieldUpdateOperationsInput | string
    ejercicioId?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    setsRealizados?: IntFieldUpdateOperationsInput | number
    repeticionesMax?: IntFieldUpdateOperationsInput | number
    cargaLevantada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notasEntrenador?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RutinaEjercicioListRelationFilter = {
    every?: RutinaEjercicioWhereInput
    some?: RutinaEjercicioWhereInput
    none?: RutinaEjercicioWhereInput
  }

  export type RegistroProgresoListRelationFilter = {
    every?: RegistroProgresoWhereInput
    some?: RegistroProgresoWhereInput
    none?: RegistroProgresoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RutinaEjercicioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegistroProgresoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EjercicioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    musculoObjetivo?: SortOrder
    urlVideo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EjercicioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    musculoObjetivo?: SortOrder
    urlVideo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EjercicioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    musculoObjetivo?: SortOrder
    urlVideo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AsignacionRutinaListRelationFilter = {
    every?: AsignacionRutinaWhereInput
    some?: AsignacionRutinaWhereInput
    none?: AsignacionRutinaWhereInput
  }

  export type AsignacionRutinaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RutinaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    creadorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RutinaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    creadorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RutinaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    creadorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type RutinaScalarRelationFilter = {
    is?: RutinaWhereInput
    isNot?: RutinaWhereInput
  }

  export type EjercicioScalarRelationFilter = {
    is?: EjercicioWhereInput
    isNot?: EjercicioWhereInput
  }

  export type RutinaEjercicioCountOrderByAggregateInput = {
    id?: SortOrder
    rutinaId?: SortOrder
    ejercicioId?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
    cargaSugerida?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RutinaEjercicioAvgOrderByAggregateInput = {
    series?: SortOrder
  }

  export type RutinaEjercicioMaxOrderByAggregateInput = {
    id?: SortOrder
    rutinaId?: SortOrder
    ejercicioId?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
    cargaSugerida?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RutinaEjercicioMinOrderByAggregateInput = {
    id?: SortOrder
    rutinaId?: SortOrder
    ejercicioId?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
    cargaSugerida?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RutinaEjercicioSumOrderByAggregateInput = {
    series?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AsignacionRutinaCountOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    entrenadorId?: SortOrder
    rutinaId?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AsignacionRutinaMaxOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    entrenadorId?: SortOrder
    rutinaId?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AsignacionRutinaMinOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    entrenadorId?: SortOrder
    rutinaId?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type AsignacionRutinaScalarRelationFilter = {
    is?: AsignacionRutinaWhereInput
    isNot?: AsignacionRutinaWhereInput
  }

  export type RegistroProgresoCountOrderByAggregateInput = {
    id?: SortOrder
    asignacionId?: SortOrder
    ejercicioId?: SortOrder
    fechaRegistro?: SortOrder
    setsRealizados?: SortOrder
    repeticionesMax?: SortOrder
    cargaLevantada?: SortOrder
    notasEntrenador?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegistroProgresoAvgOrderByAggregateInput = {
    setsRealizados?: SortOrder
    repeticionesMax?: SortOrder
    cargaLevantada?: SortOrder
  }

  export type RegistroProgresoMaxOrderByAggregateInput = {
    id?: SortOrder
    asignacionId?: SortOrder
    ejercicioId?: SortOrder
    fechaRegistro?: SortOrder
    setsRealizados?: SortOrder
    repeticionesMax?: SortOrder
    cargaLevantada?: SortOrder
    notasEntrenador?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegistroProgresoMinOrderByAggregateInput = {
    id?: SortOrder
    asignacionId?: SortOrder
    ejercicioId?: SortOrder
    fechaRegistro?: SortOrder
    setsRealizados?: SortOrder
    repeticionesMax?: SortOrder
    cargaLevantada?: SortOrder
    notasEntrenador?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegistroProgresoSumOrderByAggregateInput = {
    setsRealizados?: SortOrder
    repeticionesMax?: SortOrder
    cargaLevantada?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type RutinaEjercicioCreateNestedManyWithoutEjercicioInput = {
    create?: XOR<RutinaEjercicioCreateWithoutEjercicioInput, RutinaEjercicioUncheckedCreateWithoutEjercicioInput> | RutinaEjercicioCreateWithoutEjercicioInput[] | RutinaEjercicioUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: RutinaEjercicioCreateOrConnectWithoutEjercicioInput | RutinaEjercicioCreateOrConnectWithoutEjercicioInput[]
    createMany?: RutinaEjercicioCreateManyEjercicioInputEnvelope
    connect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
  }

  export type RegistroProgresoCreateNestedManyWithoutEjercicioInput = {
    create?: XOR<RegistroProgresoCreateWithoutEjercicioInput, RegistroProgresoUncheckedCreateWithoutEjercicioInput> | RegistroProgresoCreateWithoutEjercicioInput[] | RegistroProgresoUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: RegistroProgresoCreateOrConnectWithoutEjercicioInput | RegistroProgresoCreateOrConnectWithoutEjercicioInput[]
    createMany?: RegistroProgresoCreateManyEjercicioInputEnvelope
    connect?: RegistroProgresoWhereUniqueInput | RegistroProgresoWhereUniqueInput[]
  }

  export type RutinaEjercicioUncheckedCreateNestedManyWithoutEjercicioInput = {
    create?: XOR<RutinaEjercicioCreateWithoutEjercicioInput, RutinaEjercicioUncheckedCreateWithoutEjercicioInput> | RutinaEjercicioCreateWithoutEjercicioInput[] | RutinaEjercicioUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: RutinaEjercicioCreateOrConnectWithoutEjercicioInput | RutinaEjercicioCreateOrConnectWithoutEjercicioInput[]
    createMany?: RutinaEjercicioCreateManyEjercicioInputEnvelope
    connect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
  }

  export type RegistroProgresoUncheckedCreateNestedManyWithoutEjercicioInput = {
    create?: XOR<RegistroProgresoCreateWithoutEjercicioInput, RegistroProgresoUncheckedCreateWithoutEjercicioInput> | RegistroProgresoCreateWithoutEjercicioInput[] | RegistroProgresoUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: RegistroProgresoCreateOrConnectWithoutEjercicioInput | RegistroProgresoCreateOrConnectWithoutEjercicioInput[]
    createMany?: RegistroProgresoCreateManyEjercicioInputEnvelope
    connect?: RegistroProgresoWhereUniqueInput | RegistroProgresoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RutinaEjercicioUpdateManyWithoutEjercicioNestedInput = {
    create?: XOR<RutinaEjercicioCreateWithoutEjercicioInput, RutinaEjercicioUncheckedCreateWithoutEjercicioInput> | RutinaEjercicioCreateWithoutEjercicioInput[] | RutinaEjercicioUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: RutinaEjercicioCreateOrConnectWithoutEjercicioInput | RutinaEjercicioCreateOrConnectWithoutEjercicioInput[]
    upsert?: RutinaEjercicioUpsertWithWhereUniqueWithoutEjercicioInput | RutinaEjercicioUpsertWithWhereUniqueWithoutEjercicioInput[]
    createMany?: RutinaEjercicioCreateManyEjercicioInputEnvelope
    set?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    disconnect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    delete?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    connect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    update?: RutinaEjercicioUpdateWithWhereUniqueWithoutEjercicioInput | RutinaEjercicioUpdateWithWhereUniqueWithoutEjercicioInput[]
    updateMany?: RutinaEjercicioUpdateManyWithWhereWithoutEjercicioInput | RutinaEjercicioUpdateManyWithWhereWithoutEjercicioInput[]
    deleteMany?: RutinaEjercicioScalarWhereInput | RutinaEjercicioScalarWhereInput[]
  }

  export type RegistroProgresoUpdateManyWithoutEjercicioNestedInput = {
    create?: XOR<RegistroProgresoCreateWithoutEjercicioInput, RegistroProgresoUncheckedCreateWithoutEjercicioInput> | RegistroProgresoCreateWithoutEjercicioInput[] | RegistroProgresoUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: RegistroProgresoCreateOrConnectWithoutEjercicioInput | RegistroProgresoCreateOrConnectWithoutEjercicioInput[]
    upsert?: RegistroProgresoUpsertWithWhereUniqueWithoutEjercicioInput | RegistroProgresoUpsertWithWhereUniqueWithoutEjercicioInput[]
    createMany?: RegistroProgresoCreateManyEjercicioInputEnvelope
    set?: RegistroProgresoWhereUniqueInput | RegistroProgresoWhereUniqueInput[]
    disconnect?: RegistroProgresoWhereUniqueInput | RegistroProgresoWhereUniqueInput[]
    delete?: RegistroProgresoWhereUniqueInput | RegistroProgresoWhereUniqueInput[]
    connect?: RegistroProgresoWhereUniqueInput | RegistroProgresoWhereUniqueInput[]
    update?: RegistroProgresoUpdateWithWhereUniqueWithoutEjercicioInput | RegistroProgresoUpdateWithWhereUniqueWithoutEjercicioInput[]
    updateMany?: RegistroProgresoUpdateManyWithWhereWithoutEjercicioInput | RegistroProgresoUpdateManyWithWhereWithoutEjercicioInput[]
    deleteMany?: RegistroProgresoScalarWhereInput | RegistroProgresoScalarWhereInput[]
  }

  export type RutinaEjercicioUncheckedUpdateManyWithoutEjercicioNestedInput = {
    create?: XOR<RutinaEjercicioCreateWithoutEjercicioInput, RutinaEjercicioUncheckedCreateWithoutEjercicioInput> | RutinaEjercicioCreateWithoutEjercicioInput[] | RutinaEjercicioUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: RutinaEjercicioCreateOrConnectWithoutEjercicioInput | RutinaEjercicioCreateOrConnectWithoutEjercicioInput[]
    upsert?: RutinaEjercicioUpsertWithWhereUniqueWithoutEjercicioInput | RutinaEjercicioUpsertWithWhereUniqueWithoutEjercicioInput[]
    createMany?: RutinaEjercicioCreateManyEjercicioInputEnvelope
    set?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    disconnect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    delete?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    connect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    update?: RutinaEjercicioUpdateWithWhereUniqueWithoutEjercicioInput | RutinaEjercicioUpdateWithWhereUniqueWithoutEjercicioInput[]
    updateMany?: RutinaEjercicioUpdateManyWithWhereWithoutEjercicioInput | RutinaEjercicioUpdateManyWithWhereWithoutEjercicioInput[]
    deleteMany?: RutinaEjercicioScalarWhereInput | RutinaEjercicioScalarWhereInput[]
  }

  export type RegistroProgresoUncheckedUpdateManyWithoutEjercicioNestedInput = {
    create?: XOR<RegistroProgresoCreateWithoutEjercicioInput, RegistroProgresoUncheckedCreateWithoutEjercicioInput> | RegistroProgresoCreateWithoutEjercicioInput[] | RegistroProgresoUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: RegistroProgresoCreateOrConnectWithoutEjercicioInput | RegistroProgresoCreateOrConnectWithoutEjercicioInput[]
    upsert?: RegistroProgresoUpsertWithWhereUniqueWithoutEjercicioInput | RegistroProgresoUpsertWithWhereUniqueWithoutEjercicioInput[]
    createMany?: RegistroProgresoCreateManyEjercicioInputEnvelope
    set?: RegistroProgresoWhereUniqueInput | RegistroProgresoWhereUniqueInput[]
    disconnect?: RegistroProgresoWhereUniqueInput | RegistroProgresoWhereUniqueInput[]
    delete?: RegistroProgresoWhereUniqueInput | RegistroProgresoWhereUniqueInput[]
    connect?: RegistroProgresoWhereUniqueInput | RegistroProgresoWhereUniqueInput[]
    update?: RegistroProgresoUpdateWithWhereUniqueWithoutEjercicioInput | RegistroProgresoUpdateWithWhereUniqueWithoutEjercicioInput[]
    updateMany?: RegistroProgresoUpdateManyWithWhereWithoutEjercicioInput | RegistroProgresoUpdateManyWithWhereWithoutEjercicioInput[]
    deleteMany?: RegistroProgresoScalarWhereInput | RegistroProgresoScalarWhereInput[]
  }

  export type RutinaEjercicioCreateNestedManyWithoutRutinaInput = {
    create?: XOR<RutinaEjercicioCreateWithoutRutinaInput, RutinaEjercicioUncheckedCreateWithoutRutinaInput> | RutinaEjercicioCreateWithoutRutinaInput[] | RutinaEjercicioUncheckedCreateWithoutRutinaInput[]
    connectOrCreate?: RutinaEjercicioCreateOrConnectWithoutRutinaInput | RutinaEjercicioCreateOrConnectWithoutRutinaInput[]
    createMany?: RutinaEjercicioCreateManyRutinaInputEnvelope
    connect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
  }

  export type AsignacionRutinaCreateNestedManyWithoutRutinaInput = {
    create?: XOR<AsignacionRutinaCreateWithoutRutinaInput, AsignacionRutinaUncheckedCreateWithoutRutinaInput> | AsignacionRutinaCreateWithoutRutinaInput[] | AsignacionRutinaUncheckedCreateWithoutRutinaInput[]
    connectOrCreate?: AsignacionRutinaCreateOrConnectWithoutRutinaInput | AsignacionRutinaCreateOrConnectWithoutRutinaInput[]
    createMany?: AsignacionRutinaCreateManyRutinaInputEnvelope
    connect?: AsignacionRutinaWhereUniqueInput | AsignacionRutinaWhereUniqueInput[]
  }

  export type RutinaEjercicioUncheckedCreateNestedManyWithoutRutinaInput = {
    create?: XOR<RutinaEjercicioCreateWithoutRutinaInput, RutinaEjercicioUncheckedCreateWithoutRutinaInput> | RutinaEjercicioCreateWithoutRutinaInput[] | RutinaEjercicioUncheckedCreateWithoutRutinaInput[]
    connectOrCreate?: RutinaEjercicioCreateOrConnectWithoutRutinaInput | RutinaEjercicioCreateOrConnectWithoutRutinaInput[]
    createMany?: RutinaEjercicioCreateManyRutinaInputEnvelope
    connect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
  }

  export type AsignacionRutinaUncheckedCreateNestedManyWithoutRutinaInput = {
    create?: XOR<AsignacionRutinaCreateWithoutRutinaInput, AsignacionRutinaUncheckedCreateWithoutRutinaInput> | AsignacionRutinaCreateWithoutRutinaInput[] | AsignacionRutinaUncheckedCreateWithoutRutinaInput[]
    connectOrCreate?: AsignacionRutinaCreateOrConnectWithoutRutinaInput | AsignacionRutinaCreateOrConnectWithoutRutinaInput[]
    createMany?: AsignacionRutinaCreateManyRutinaInputEnvelope
    connect?: AsignacionRutinaWhereUniqueInput | AsignacionRutinaWhereUniqueInput[]
  }

  export type RutinaEjercicioUpdateManyWithoutRutinaNestedInput = {
    create?: XOR<RutinaEjercicioCreateWithoutRutinaInput, RutinaEjercicioUncheckedCreateWithoutRutinaInput> | RutinaEjercicioCreateWithoutRutinaInput[] | RutinaEjercicioUncheckedCreateWithoutRutinaInput[]
    connectOrCreate?: RutinaEjercicioCreateOrConnectWithoutRutinaInput | RutinaEjercicioCreateOrConnectWithoutRutinaInput[]
    upsert?: RutinaEjercicioUpsertWithWhereUniqueWithoutRutinaInput | RutinaEjercicioUpsertWithWhereUniqueWithoutRutinaInput[]
    createMany?: RutinaEjercicioCreateManyRutinaInputEnvelope
    set?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    disconnect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    delete?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    connect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    update?: RutinaEjercicioUpdateWithWhereUniqueWithoutRutinaInput | RutinaEjercicioUpdateWithWhereUniqueWithoutRutinaInput[]
    updateMany?: RutinaEjercicioUpdateManyWithWhereWithoutRutinaInput | RutinaEjercicioUpdateManyWithWhereWithoutRutinaInput[]
    deleteMany?: RutinaEjercicioScalarWhereInput | RutinaEjercicioScalarWhereInput[]
  }

  export type AsignacionRutinaUpdateManyWithoutRutinaNestedInput = {
    create?: XOR<AsignacionRutinaCreateWithoutRutinaInput, AsignacionRutinaUncheckedCreateWithoutRutinaInput> | AsignacionRutinaCreateWithoutRutinaInput[] | AsignacionRutinaUncheckedCreateWithoutRutinaInput[]
    connectOrCreate?: AsignacionRutinaCreateOrConnectWithoutRutinaInput | AsignacionRutinaCreateOrConnectWithoutRutinaInput[]
    upsert?: AsignacionRutinaUpsertWithWhereUniqueWithoutRutinaInput | AsignacionRutinaUpsertWithWhereUniqueWithoutRutinaInput[]
    createMany?: AsignacionRutinaCreateManyRutinaInputEnvelope
    set?: AsignacionRutinaWhereUniqueInput | AsignacionRutinaWhereUniqueInput[]
    disconnect?: AsignacionRutinaWhereUniqueInput | AsignacionRutinaWhereUniqueInput[]
    delete?: AsignacionRutinaWhereUniqueInput | AsignacionRutinaWhereUniqueInput[]
    connect?: AsignacionRutinaWhereUniqueInput | AsignacionRutinaWhereUniqueInput[]
    update?: AsignacionRutinaUpdateWithWhereUniqueWithoutRutinaInput | AsignacionRutinaUpdateWithWhereUniqueWithoutRutinaInput[]
    updateMany?: AsignacionRutinaUpdateManyWithWhereWithoutRutinaInput | AsignacionRutinaUpdateManyWithWhereWithoutRutinaInput[]
    deleteMany?: AsignacionRutinaScalarWhereInput | AsignacionRutinaScalarWhereInput[]
  }

  export type RutinaEjercicioUncheckedUpdateManyWithoutRutinaNestedInput = {
    create?: XOR<RutinaEjercicioCreateWithoutRutinaInput, RutinaEjercicioUncheckedCreateWithoutRutinaInput> | RutinaEjercicioCreateWithoutRutinaInput[] | RutinaEjercicioUncheckedCreateWithoutRutinaInput[]
    connectOrCreate?: RutinaEjercicioCreateOrConnectWithoutRutinaInput | RutinaEjercicioCreateOrConnectWithoutRutinaInput[]
    upsert?: RutinaEjercicioUpsertWithWhereUniqueWithoutRutinaInput | RutinaEjercicioUpsertWithWhereUniqueWithoutRutinaInput[]
    createMany?: RutinaEjercicioCreateManyRutinaInputEnvelope
    set?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    disconnect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    delete?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    connect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    update?: RutinaEjercicioUpdateWithWhereUniqueWithoutRutinaInput | RutinaEjercicioUpdateWithWhereUniqueWithoutRutinaInput[]
    updateMany?: RutinaEjercicioUpdateManyWithWhereWithoutRutinaInput | RutinaEjercicioUpdateManyWithWhereWithoutRutinaInput[]
    deleteMany?: RutinaEjercicioScalarWhereInput | RutinaEjercicioScalarWhereInput[]
  }

  export type AsignacionRutinaUncheckedUpdateManyWithoutRutinaNestedInput = {
    create?: XOR<AsignacionRutinaCreateWithoutRutinaInput, AsignacionRutinaUncheckedCreateWithoutRutinaInput> | AsignacionRutinaCreateWithoutRutinaInput[] | AsignacionRutinaUncheckedCreateWithoutRutinaInput[]
    connectOrCreate?: AsignacionRutinaCreateOrConnectWithoutRutinaInput | AsignacionRutinaCreateOrConnectWithoutRutinaInput[]
    upsert?: AsignacionRutinaUpsertWithWhereUniqueWithoutRutinaInput | AsignacionRutinaUpsertWithWhereUniqueWithoutRutinaInput[]
    createMany?: AsignacionRutinaCreateManyRutinaInputEnvelope
    set?: AsignacionRutinaWhereUniqueInput | AsignacionRutinaWhereUniqueInput[]
    disconnect?: AsignacionRutinaWhereUniqueInput | AsignacionRutinaWhereUniqueInput[]
    delete?: AsignacionRutinaWhereUniqueInput | AsignacionRutinaWhereUniqueInput[]
    connect?: AsignacionRutinaWhereUniqueInput | AsignacionRutinaWhereUniqueInput[]
    update?: AsignacionRutinaUpdateWithWhereUniqueWithoutRutinaInput | AsignacionRutinaUpdateWithWhereUniqueWithoutRutinaInput[]
    updateMany?: AsignacionRutinaUpdateManyWithWhereWithoutRutinaInput | AsignacionRutinaUpdateManyWithWhereWithoutRutinaInput[]
    deleteMany?: AsignacionRutinaScalarWhereInput | AsignacionRutinaScalarWhereInput[]
  }

  export type RutinaCreateNestedOneWithoutEjerciciosInput = {
    create?: XOR<RutinaCreateWithoutEjerciciosInput, RutinaUncheckedCreateWithoutEjerciciosInput>
    connectOrCreate?: RutinaCreateOrConnectWithoutEjerciciosInput
    connect?: RutinaWhereUniqueInput
  }

  export type EjercicioCreateNestedOneWithoutRutinaEjerciciosInput = {
    create?: XOR<EjercicioCreateWithoutRutinaEjerciciosInput, EjercicioUncheckedCreateWithoutRutinaEjerciciosInput>
    connectOrCreate?: EjercicioCreateOrConnectWithoutRutinaEjerciciosInput
    connect?: EjercicioWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RutinaUpdateOneRequiredWithoutEjerciciosNestedInput = {
    create?: XOR<RutinaCreateWithoutEjerciciosInput, RutinaUncheckedCreateWithoutEjerciciosInput>
    connectOrCreate?: RutinaCreateOrConnectWithoutEjerciciosInput
    upsert?: RutinaUpsertWithoutEjerciciosInput
    connect?: RutinaWhereUniqueInput
    update?: XOR<XOR<RutinaUpdateToOneWithWhereWithoutEjerciciosInput, RutinaUpdateWithoutEjerciciosInput>, RutinaUncheckedUpdateWithoutEjerciciosInput>
  }

  export type EjercicioUpdateOneRequiredWithoutRutinaEjerciciosNestedInput = {
    create?: XOR<EjercicioCreateWithoutRutinaEjerciciosInput, EjercicioUncheckedCreateWithoutRutinaEjerciciosInput>
    connectOrCreate?: EjercicioCreateOrConnectWithoutRutinaEjerciciosInput
    upsert?: EjercicioUpsertWithoutRutinaEjerciciosInput
    connect?: EjercicioWhereUniqueInput
    update?: XOR<XOR<EjercicioUpdateToOneWithWhereWithoutRutinaEjerciciosInput, EjercicioUpdateWithoutRutinaEjerciciosInput>, EjercicioUncheckedUpdateWithoutRutinaEjerciciosInput>
  }

  export type RutinaCreateNestedOneWithoutAsignacionesInput = {
    create?: XOR<RutinaCreateWithoutAsignacionesInput, RutinaUncheckedCreateWithoutAsignacionesInput>
    connectOrCreate?: RutinaCreateOrConnectWithoutAsignacionesInput
    connect?: RutinaWhereUniqueInput
  }

  export type RegistroProgresoCreateNestedManyWithoutAsignacionInput = {
    create?: XOR<RegistroProgresoCreateWithoutAsignacionInput, RegistroProgresoUncheckedCreateWithoutAsignacionInput> | RegistroProgresoCreateWithoutAsignacionInput[] | RegistroProgresoUncheckedCreateWithoutAsignacionInput[]
    connectOrCreate?: RegistroProgresoCreateOrConnectWithoutAsignacionInput | RegistroProgresoCreateOrConnectWithoutAsignacionInput[]
    createMany?: RegistroProgresoCreateManyAsignacionInputEnvelope
    connect?: RegistroProgresoWhereUniqueInput | RegistroProgresoWhereUniqueInput[]
  }

  export type RegistroProgresoUncheckedCreateNestedManyWithoutAsignacionInput = {
    create?: XOR<RegistroProgresoCreateWithoutAsignacionInput, RegistroProgresoUncheckedCreateWithoutAsignacionInput> | RegistroProgresoCreateWithoutAsignacionInput[] | RegistroProgresoUncheckedCreateWithoutAsignacionInput[]
    connectOrCreate?: RegistroProgresoCreateOrConnectWithoutAsignacionInput | RegistroProgresoCreateOrConnectWithoutAsignacionInput[]
    createMany?: RegistroProgresoCreateManyAsignacionInputEnvelope
    connect?: RegistroProgresoWhereUniqueInput | RegistroProgresoWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RutinaUpdateOneRequiredWithoutAsignacionesNestedInput = {
    create?: XOR<RutinaCreateWithoutAsignacionesInput, RutinaUncheckedCreateWithoutAsignacionesInput>
    connectOrCreate?: RutinaCreateOrConnectWithoutAsignacionesInput
    upsert?: RutinaUpsertWithoutAsignacionesInput
    connect?: RutinaWhereUniqueInput
    update?: XOR<XOR<RutinaUpdateToOneWithWhereWithoutAsignacionesInput, RutinaUpdateWithoutAsignacionesInput>, RutinaUncheckedUpdateWithoutAsignacionesInput>
  }

  export type RegistroProgresoUpdateManyWithoutAsignacionNestedInput = {
    create?: XOR<RegistroProgresoCreateWithoutAsignacionInput, RegistroProgresoUncheckedCreateWithoutAsignacionInput> | RegistroProgresoCreateWithoutAsignacionInput[] | RegistroProgresoUncheckedCreateWithoutAsignacionInput[]
    connectOrCreate?: RegistroProgresoCreateOrConnectWithoutAsignacionInput | RegistroProgresoCreateOrConnectWithoutAsignacionInput[]
    upsert?: RegistroProgresoUpsertWithWhereUniqueWithoutAsignacionInput | RegistroProgresoUpsertWithWhereUniqueWithoutAsignacionInput[]
    createMany?: RegistroProgresoCreateManyAsignacionInputEnvelope
    set?: RegistroProgresoWhereUniqueInput | RegistroProgresoWhereUniqueInput[]
    disconnect?: RegistroProgresoWhereUniqueInput | RegistroProgresoWhereUniqueInput[]
    delete?: RegistroProgresoWhereUniqueInput | RegistroProgresoWhereUniqueInput[]
    connect?: RegistroProgresoWhereUniqueInput | RegistroProgresoWhereUniqueInput[]
    update?: RegistroProgresoUpdateWithWhereUniqueWithoutAsignacionInput | RegistroProgresoUpdateWithWhereUniqueWithoutAsignacionInput[]
    updateMany?: RegistroProgresoUpdateManyWithWhereWithoutAsignacionInput | RegistroProgresoUpdateManyWithWhereWithoutAsignacionInput[]
    deleteMany?: RegistroProgresoScalarWhereInput | RegistroProgresoScalarWhereInput[]
  }

  export type RegistroProgresoUncheckedUpdateManyWithoutAsignacionNestedInput = {
    create?: XOR<RegistroProgresoCreateWithoutAsignacionInput, RegistroProgresoUncheckedCreateWithoutAsignacionInput> | RegistroProgresoCreateWithoutAsignacionInput[] | RegistroProgresoUncheckedCreateWithoutAsignacionInput[]
    connectOrCreate?: RegistroProgresoCreateOrConnectWithoutAsignacionInput | RegistroProgresoCreateOrConnectWithoutAsignacionInput[]
    upsert?: RegistroProgresoUpsertWithWhereUniqueWithoutAsignacionInput | RegistroProgresoUpsertWithWhereUniqueWithoutAsignacionInput[]
    createMany?: RegistroProgresoCreateManyAsignacionInputEnvelope
    set?: RegistroProgresoWhereUniqueInput | RegistroProgresoWhereUniqueInput[]
    disconnect?: RegistroProgresoWhereUniqueInput | RegistroProgresoWhereUniqueInput[]
    delete?: RegistroProgresoWhereUniqueInput | RegistroProgresoWhereUniqueInput[]
    connect?: RegistroProgresoWhereUniqueInput | RegistroProgresoWhereUniqueInput[]
    update?: RegistroProgresoUpdateWithWhereUniqueWithoutAsignacionInput | RegistroProgresoUpdateWithWhereUniqueWithoutAsignacionInput[]
    updateMany?: RegistroProgresoUpdateManyWithWhereWithoutAsignacionInput | RegistroProgresoUpdateManyWithWhereWithoutAsignacionInput[]
    deleteMany?: RegistroProgresoScalarWhereInput | RegistroProgresoScalarWhereInput[]
  }

  export type AsignacionRutinaCreateNestedOneWithoutRegistrosInput = {
    create?: XOR<AsignacionRutinaCreateWithoutRegistrosInput, AsignacionRutinaUncheckedCreateWithoutRegistrosInput>
    connectOrCreate?: AsignacionRutinaCreateOrConnectWithoutRegistrosInput
    connect?: AsignacionRutinaWhereUniqueInput
  }

  export type EjercicioCreateNestedOneWithoutRegistrosProgresoInput = {
    create?: XOR<EjercicioCreateWithoutRegistrosProgresoInput, EjercicioUncheckedCreateWithoutRegistrosProgresoInput>
    connectOrCreate?: EjercicioCreateOrConnectWithoutRegistrosProgresoInput
    connect?: EjercicioWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type AsignacionRutinaUpdateOneRequiredWithoutRegistrosNestedInput = {
    create?: XOR<AsignacionRutinaCreateWithoutRegistrosInput, AsignacionRutinaUncheckedCreateWithoutRegistrosInput>
    connectOrCreate?: AsignacionRutinaCreateOrConnectWithoutRegistrosInput
    upsert?: AsignacionRutinaUpsertWithoutRegistrosInput
    connect?: AsignacionRutinaWhereUniqueInput
    update?: XOR<XOR<AsignacionRutinaUpdateToOneWithWhereWithoutRegistrosInput, AsignacionRutinaUpdateWithoutRegistrosInput>, AsignacionRutinaUncheckedUpdateWithoutRegistrosInput>
  }

  export type EjercicioUpdateOneRequiredWithoutRegistrosProgresoNestedInput = {
    create?: XOR<EjercicioCreateWithoutRegistrosProgresoInput, EjercicioUncheckedCreateWithoutRegistrosProgresoInput>
    connectOrCreate?: EjercicioCreateOrConnectWithoutRegistrosProgresoInput
    upsert?: EjercicioUpsertWithoutRegistrosProgresoInput
    connect?: EjercicioWhereUniqueInput
    update?: XOR<XOR<EjercicioUpdateToOneWithWhereWithoutRegistrosProgresoInput, EjercicioUpdateWithoutRegistrosProgresoInput>, EjercicioUncheckedUpdateWithoutRegistrosProgresoInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type RutinaEjercicioCreateWithoutEjercicioInput = {
    id?: string
    series: number
    repeticiones: string
    cargaSugerida: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rutina: RutinaCreateNestedOneWithoutEjerciciosInput
  }

  export type RutinaEjercicioUncheckedCreateWithoutEjercicioInput = {
    id?: string
    rutinaId: string
    series: number
    repeticiones: string
    cargaSugerida: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RutinaEjercicioCreateOrConnectWithoutEjercicioInput = {
    where: RutinaEjercicioWhereUniqueInput
    create: XOR<RutinaEjercicioCreateWithoutEjercicioInput, RutinaEjercicioUncheckedCreateWithoutEjercicioInput>
  }

  export type RutinaEjercicioCreateManyEjercicioInputEnvelope = {
    data: RutinaEjercicioCreateManyEjercicioInput | RutinaEjercicioCreateManyEjercicioInput[]
    skipDuplicates?: boolean
  }

  export type RegistroProgresoCreateWithoutEjercicioInput = {
    id?: string
    fechaRegistro: Date | string
    setsRealizados: number
    repeticionesMax: number
    cargaLevantada: Decimal | DecimalJsLike | number | string
    notasEntrenador?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    asignacion: AsignacionRutinaCreateNestedOneWithoutRegistrosInput
  }

  export type RegistroProgresoUncheckedCreateWithoutEjercicioInput = {
    id?: string
    asignacionId: string
    fechaRegistro: Date | string
    setsRealizados: number
    repeticionesMax: number
    cargaLevantada: Decimal | DecimalJsLike | number | string
    notasEntrenador?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistroProgresoCreateOrConnectWithoutEjercicioInput = {
    where: RegistroProgresoWhereUniqueInput
    create: XOR<RegistroProgresoCreateWithoutEjercicioInput, RegistroProgresoUncheckedCreateWithoutEjercicioInput>
  }

  export type RegistroProgresoCreateManyEjercicioInputEnvelope = {
    data: RegistroProgresoCreateManyEjercicioInput | RegistroProgresoCreateManyEjercicioInput[]
    skipDuplicates?: boolean
  }

  export type RutinaEjercicioUpsertWithWhereUniqueWithoutEjercicioInput = {
    where: RutinaEjercicioWhereUniqueInput
    update: XOR<RutinaEjercicioUpdateWithoutEjercicioInput, RutinaEjercicioUncheckedUpdateWithoutEjercicioInput>
    create: XOR<RutinaEjercicioCreateWithoutEjercicioInput, RutinaEjercicioUncheckedCreateWithoutEjercicioInput>
  }

  export type RutinaEjercicioUpdateWithWhereUniqueWithoutEjercicioInput = {
    where: RutinaEjercicioWhereUniqueInput
    data: XOR<RutinaEjercicioUpdateWithoutEjercicioInput, RutinaEjercicioUncheckedUpdateWithoutEjercicioInput>
  }

  export type RutinaEjercicioUpdateManyWithWhereWithoutEjercicioInput = {
    where: RutinaEjercicioScalarWhereInput
    data: XOR<RutinaEjercicioUpdateManyMutationInput, RutinaEjercicioUncheckedUpdateManyWithoutEjercicioInput>
  }

  export type RutinaEjercicioScalarWhereInput = {
    AND?: RutinaEjercicioScalarWhereInput | RutinaEjercicioScalarWhereInput[]
    OR?: RutinaEjercicioScalarWhereInput[]
    NOT?: RutinaEjercicioScalarWhereInput | RutinaEjercicioScalarWhereInput[]
    id?: StringFilter<"RutinaEjercicio"> | string
    rutinaId?: StringFilter<"RutinaEjercicio"> | string
    ejercicioId?: StringFilter<"RutinaEjercicio"> | string
    series?: IntFilter<"RutinaEjercicio"> | number
    repeticiones?: StringFilter<"RutinaEjercicio"> | string
    cargaSugerida?: StringFilter<"RutinaEjercicio"> | string
    createdAt?: DateTimeFilter<"RutinaEjercicio"> | Date | string
    updatedAt?: DateTimeFilter<"RutinaEjercicio"> | Date | string
  }

  export type RegistroProgresoUpsertWithWhereUniqueWithoutEjercicioInput = {
    where: RegistroProgresoWhereUniqueInput
    update: XOR<RegistroProgresoUpdateWithoutEjercicioInput, RegistroProgresoUncheckedUpdateWithoutEjercicioInput>
    create: XOR<RegistroProgresoCreateWithoutEjercicioInput, RegistroProgresoUncheckedCreateWithoutEjercicioInput>
  }

  export type RegistroProgresoUpdateWithWhereUniqueWithoutEjercicioInput = {
    where: RegistroProgresoWhereUniqueInput
    data: XOR<RegistroProgresoUpdateWithoutEjercicioInput, RegistroProgresoUncheckedUpdateWithoutEjercicioInput>
  }

  export type RegistroProgresoUpdateManyWithWhereWithoutEjercicioInput = {
    where: RegistroProgresoScalarWhereInput
    data: XOR<RegistroProgresoUpdateManyMutationInput, RegistroProgresoUncheckedUpdateManyWithoutEjercicioInput>
  }

  export type RegistroProgresoScalarWhereInput = {
    AND?: RegistroProgresoScalarWhereInput | RegistroProgresoScalarWhereInput[]
    OR?: RegistroProgresoScalarWhereInput[]
    NOT?: RegistroProgresoScalarWhereInput | RegistroProgresoScalarWhereInput[]
    id?: StringFilter<"RegistroProgreso"> | string
    asignacionId?: StringFilter<"RegistroProgreso"> | string
    ejercicioId?: StringFilter<"RegistroProgreso"> | string
    fechaRegistro?: DateTimeFilter<"RegistroProgreso"> | Date | string
    setsRealizados?: IntFilter<"RegistroProgreso"> | number
    repeticionesMax?: IntFilter<"RegistroProgreso"> | number
    cargaLevantada?: DecimalFilter<"RegistroProgreso"> | Decimal | DecimalJsLike | number | string
    notasEntrenador?: StringNullableFilter<"RegistroProgreso"> | string | null
    createdAt?: DateTimeFilter<"RegistroProgreso"> | Date | string
    updatedAt?: DateTimeFilter<"RegistroProgreso"> | Date | string
  }

  export type RutinaEjercicioCreateWithoutRutinaInput = {
    id?: string
    series: number
    repeticiones: string
    cargaSugerida: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ejercicio: EjercicioCreateNestedOneWithoutRutinaEjerciciosInput
  }

  export type RutinaEjercicioUncheckedCreateWithoutRutinaInput = {
    id?: string
    ejercicioId: string
    series: number
    repeticiones: string
    cargaSugerida: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RutinaEjercicioCreateOrConnectWithoutRutinaInput = {
    where: RutinaEjercicioWhereUniqueInput
    create: XOR<RutinaEjercicioCreateWithoutRutinaInput, RutinaEjercicioUncheckedCreateWithoutRutinaInput>
  }

  export type RutinaEjercicioCreateManyRutinaInputEnvelope = {
    data: RutinaEjercicioCreateManyRutinaInput | RutinaEjercicioCreateManyRutinaInput[]
    skipDuplicates?: boolean
  }

  export type AsignacionRutinaCreateWithoutRutinaInput = {
    id?: string
    clienteId: string
    entrenadorId: string
    fechaInicio: Date | string
    fechaFin: Date | string
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    registros?: RegistroProgresoCreateNestedManyWithoutAsignacionInput
  }

  export type AsignacionRutinaUncheckedCreateWithoutRutinaInput = {
    id?: string
    clienteId: string
    entrenadorId: string
    fechaInicio: Date | string
    fechaFin: Date | string
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    registros?: RegistroProgresoUncheckedCreateNestedManyWithoutAsignacionInput
  }

  export type AsignacionRutinaCreateOrConnectWithoutRutinaInput = {
    where: AsignacionRutinaWhereUniqueInput
    create: XOR<AsignacionRutinaCreateWithoutRutinaInput, AsignacionRutinaUncheckedCreateWithoutRutinaInput>
  }

  export type AsignacionRutinaCreateManyRutinaInputEnvelope = {
    data: AsignacionRutinaCreateManyRutinaInput | AsignacionRutinaCreateManyRutinaInput[]
    skipDuplicates?: boolean
  }

  export type RutinaEjercicioUpsertWithWhereUniqueWithoutRutinaInput = {
    where: RutinaEjercicioWhereUniqueInput
    update: XOR<RutinaEjercicioUpdateWithoutRutinaInput, RutinaEjercicioUncheckedUpdateWithoutRutinaInput>
    create: XOR<RutinaEjercicioCreateWithoutRutinaInput, RutinaEjercicioUncheckedCreateWithoutRutinaInput>
  }

  export type RutinaEjercicioUpdateWithWhereUniqueWithoutRutinaInput = {
    where: RutinaEjercicioWhereUniqueInput
    data: XOR<RutinaEjercicioUpdateWithoutRutinaInput, RutinaEjercicioUncheckedUpdateWithoutRutinaInput>
  }

  export type RutinaEjercicioUpdateManyWithWhereWithoutRutinaInput = {
    where: RutinaEjercicioScalarWhereInput
    data: XOR<RutinaEjercicioUpdateManyMutationInput, RutinaEjercicioUncheckedUpdateManyWithoutRutinaInput>
  }

  export type AsignacionRutinaUpsertWithWhereUniqueWithoutRutinaInput = {
    where: AsignacionRutinaWhereUniqueInput
    update: XOR<AsignacionRutinaUpdateWithoutRutinaInput, AsignacionRutinaUncheckedUpdateWithoutRutinaInput>
    create: XOR<AsignacionRutinaCreateWithoutRutinaInput, AsignacionRutinaUncheckedCreateWithoutRutinaInput>
  }

  export type AsignacionRutinaUpdateWithWhereUniqueWithoutRutinaInput = {
    where: AsignacionRutinaWhereUniqueInput
    data: XOR<AsignacionRutinaUpdateWithoutRutinaInput, AsignacionRutinaUncheckedUpdateWithoutRutinaInput>
  }

  export type AsignacionRutinaUpdateManyWithWhereWithoutRutinaInput = {
    where: AsignacionRutinaScalarWhereInput
    data: XOR<AsignacionRutinaUpdateManyMutationInput, AsignacionRutinaUncheckedUpdateManyWithoutRutinaInput>
  }

  export type AsignacionRutinaScalarWhereInput = {
    AND?: AsignacionRutinaScalarWhereInput | AsignacionRutinaScalarWhereInput[]
    OR?: AsignacionRutinaScalarWhereInput[]
    NOT?: AsignacionRutinaScalarWhereInput | AsignacionRutinaScalarWhereInput[]
    id?: StringFilter<"AsignacionRutina"> | string
    clienteId?: StringFilter<"AsignacionRutina"> | string
    entrenadorId?: StringFilter<"AsignacionRutina"> | string
    rutinaId?: StringFilter<"AsignacionRutina"> | string
    fechaInicio?: DateTimeFilter<"AsignacionRutina"> | Date | string
    fechaFin?: DateTimeFilter<"AsignacionRutina"> | Date | string
    activa?: BoolFilter<"AsignacionRutina"> | boolean
    createdAt?: DateTimeFilter<"AsignacionRutina"> | Date | string
    updatedAt?: DateTimeFilter<"AsignacionRutina"> | Date | string
  }

  export type RutinaCreateWithoutEjerciciosInput = {
    id?: string
    nombre: string
    creadorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    asignaciones?: AsignacionRutinaCreateNestedManyWithoutRutinaInput
  }

  export type RutinaUncheckedCreateWithoutEjerciciosInput = {
    id?: string
    nombre: string
    creadorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    asignaciones?: AsignacionRutinaUncheckedCreateNestedManyWithoutRutinaInput
  }

  export type RutinaCreateOrConnectWithoutEjerciciosInput = {
    where: RutinaWhereUniqueInput
    create: XOR<RutinaCreateWithoutEjerciciosInput, RutinaUncheckedCreateWithoutEjerciciosInput>
  }

  export type EjercicioCreateWithoutRutinaEjerciciosInput = {
    id?: string
    nombre: string
    descripcion: string
    musculoObjetivo: string
    urlVideo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    registrosProgreso?: RegistroProgresoCreateNestedManyWithoutEjercicioInput
  }

  export type EjercicioUncheckedCreateWithoutRutinaEjerciciosInput = {
    id?: string
    nombre: string
    descripcion: string
    musculoObjetivo: string
    urlVideo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    registrosProgreso?: RegistroProgresoUncheckedCreateNestedManyWithoutEjercicioInput
  }

  export type EjercicioCreateOrConnectWithoutRutinaEjerciciosInput = {
    where: EjercicioWhereUniqueInput
    create: XOR<EjercicioCreateWithoutRutinaEjerciciosInput, EjercicioUncheckedCreateWithoutRutinaEjerciciosInput>
  }

  export type RutinaUpsertWithoutEjerciciosInput = {
    update: XOR<RutinaUpdateWithoutEjerciciosInput, RutinaUncheckedUpdateWithoutEjerciciosInput>
    create: XOR<RutinaCreateWithoutEjerciciosInput, RutinaUncheckedCreateWithoutEjerciciosInput>
    where?: RutinaWhereInput
  }

  export type RutinaUpdateToOneWithWhereWithoutEjerciciosInput = {
    where?: RutinaWhereInput
    data: XOR<RutinaUpdateWithoutEjerciciosInput, RutinaUncheckedUpdateWithoutEjerciciosInput>
  }

  export type RutinaUpdateWithoutEjerciciosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    creadorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asignaciones?: AsignacionRutinaUpdateManyWithoutRutinaNestedInput
  }

  export type RutinaUncheckedUpdateWithoutEjerciciosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    creadorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asignaciones?: AsignacionRutinaUncheckedUpdateManyWithoutRutinaNestedInput
  }

  export type EjercicioUpsertWithoutRutinaEjerciciosInput = {
    update: XOR<EjercicioUpdateWithoutRutinaEjerciciosInput, EjercicioUncheckedUpdateWithoutRutinaEjerciciosInput>
    create: XOR<EjercicioCreateWithoutRutinaEjerciciosInput, EjercicioUncheckedCreateWithoutRutinaEjerciciosInput>
    where?: EjercicioWhereInput
  }

  export type EjercicioUpdateToOneWithWhereWithoutRutinaEjerciciosInput = {
    where?: EjercicioWhereInput
    data: XOR<EjercicioUpdateWithoutRutinaEjerciciosInput, EjercicioUncheckedUpdateWithoutRutinaEjerciciosInput>
  }

  export type EjercicioUpdateWithoutRutinaEjerciciosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    musculoObjetivo?: StringFieldUpdateOperationsInput | string
    urlVideo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrosProgreso?: RegistroProgresoUpdateManyWithoutEjercicioNestedInput
  }

  export type EjercicioUncheckedUpdateWithoutRutinaEjerciciosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    musculoObjetivo?: StringFieldUpdateOperationsInput | string
    urlVideo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrosProgreso?: RegistroProgresoUncheckedUpdateManyWithoutEjercicioNestedInput
  }

  export type RutinaCreateWithoutAsignacionesInput = {
    id?: string
    nombre: string
    creadorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ejercicios?: RutinaEjercicioCreateNestedManyWithoutRutinaInput
  }

  export type RutinaUncheckedCreateWithoutAsignacionesInput = {
    id?: string
    nombre: string
    creadorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ejercicios?: RutinaEjercicioUncheckedCreateNestedManyWithoutRutinaInput
  }

  export type RutinaCreateOrConnectWithoutAsignacionesInput = {
    where: RutinaWhereUniqueInput
    create: XOR<RutinaCreateWithoutAsignacionesInput, RutinaUncheckedCreateWithoutAsignacionesInput>
  }

  export type RegistroProgresoCreateWithoutAsignacionInput = {
    id?: string
    fechaRegistro: Date | string
    setsRealizados: number
    repeticionesMax: number
    cargaLevantada: Decimal | DecimalJsLike | number | string
    notasEntrenador?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ejercicio: EjercicioCreateNestedOneWithoutRegistrosProgresoInput
  }

  export type RegistroProgresoUncheckedCreateWithoutAsignacionInput = {
    id?: string
    ejercicioId: string
    fechaRegistro: Date | string
    setsRealizados: number
    repeticionesMax: number
    cargaLevantada: Decimal | DecimalJsLike | number | string
    notasEntrenador?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistroProgresoCreateOrConnectWithoutAsignacionInput = {
    where: RegistroProgresoWhereUniqueInput
    create: XOR<RegistroProgresoCreateWithoutAsignacionInput, RegistroProgresoUncheckedCreateWithoutAsignacionInput>
  }

  export type RegistroProgresoCreateManyAsignacionInputEnvelope = {
    data: RegistroProgresoCreateManyAsignacionInput | RegistroProgresoCreateManyAsignacionInput[]
    skipDuplicates?: boolean
  }

  export type RutinaUpsertWithoutAsignacionesInput = {
    update: XOR<RutinaUpdateWithoutAsignacionesInput, RutinaUncheckedUpdateWithoutAsignacionesInput>
    create: XOR<RutinaCreateWithoutAsignacionesInput, RutinaUncheckedCreateWithoutAsignacionesInput>
    where?: RutinaWhereInput
  }

  export type RutinaUpdateToOneWithWhereWithoutAsignacionesInput = {
    where?: RutinaWhereInput
    data: XOR<RutinaUpdateWithoutAsignacionesInput, RutinaUncheckedUpdateWithoutAsignacionesInput>
  }

  export type RutinaUpdateWithoutAsignacionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    creadorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ejercicios?: RutinaEjercicioUpdateManyWithoutRutinaNestedInput
  }

  export type RutinaUncheckedUpdateWithoutAsignacionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    creadorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ejercicios?: RutinaEjercicioUncheckedUpdateManyWithoutRutinaNestedInput
  }

  export type RegistroProgresoUpsertWithWhereUniqueWithoutAsignacionInput = {
    where: RegistroProgresoWhereUniqueInput
    update: XOR<RegistroProgresoUpdateWithoutAsignacionInput, RegistroProgresoUncheckedUpdateWithoutAsignacionInput>
    create: XOR<RegistroProgresoCreateWithoutAsignacionInput, RegistroProgresoUncheckedCreateWithoutAsignacionInput>
  }

  export type RegistroProgresoUpdateWithWhereUniqueWithoutAsignacionInput = {
    where: RegistroProgresoWhereUniqueInput
    data: XOR<RegistroProgresoUpdateWithoutAsignacionInput, RegistroProgresoUncheckedUpdateWithoutAsignacionInput>
  }

  export type RegistroProgresoUpdateManyWithWhereWithoutAsignacionInput = {
    where: RegistroProgresoScalarWhereInput
    data: XOR<RegistroProgresoUpdateManyMutationInput, RegistroProgresoUncheckedUpdateManyWithoutAsignacionInput>
  }

  export type AsignacionRutinaCreateWithoutRegistrosInput = {
    id?: string
    clienteId: string
    entrenadorId: string
    fechaInicio: Date | string
    fechaFin: Date | string
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rutina: RutinaCreateNestedOneWithoutAsignacionesInput
  }

  export type AsignacionRutinaUncheckedCreateWithoutRegistrosInput = {
    id?: string
    clienteId: string
    entrenadorId: string
    rutinaId: string
    fechaInicio: Date | string
    fechaFin: Date | string
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AsignacionRutinaCreateOrConnectWithoutRegistrosInput = {
    where: AsignacionRutinaWhereUniqueInput
    create: XOR<AsignacionRutinaCreateWithoutRegistrosInput, AsignacionRutinaUncheckedCreateWithoutRegistrosInput>
  }

  export type EjercicioCreateWithoutRegistrosProgresoInput = {
    id?: string
    nombre: string
    descripcion: string
    musculoObjetivo: string
    urlVideo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rutinaEjercicios?: RutinaEjercicioCreateNestedManyWithoutEjercicioInput
  }

  export type EjercicioUncheckedCreateWithoutRegistrosProgresoInput = {
    id?: string
    nombre: string
    descripcion: string
    musculoObjetivo: string
    urlVideo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rutinaEjercicios?: RutinaEjercicioUncheckedCreateNestedManyWithoutEjercicioInput
  }

  export type EjercicioCreateOrConnectWithoutRegistrosProgresoInput = {
    where: EjercicioWhereUniqueInput
    create: XOR<EjercicioCreateWithoutRegistrosProgresoInput, EjercicioUncheckedCreateWithoutRegistrosProgresoInput>
  }

  export type AsignacionRutinaUpsertWithoutRegistrosInput = {
    update: XOR<AsignacionRutinaUpdateWithoutRegistrosInput, AsignacionRutinaUncheckedUpdateWithoutRegistrosInput>
    create: XOR<AsignacionRutinaCreateWithoutRegistrosInput, AsignacionRutinaUncheckedCreateWithoutRegistrosInput>
    where?: AsignacionRutinaWhereInput
  }

  export type AsignacionRutinaUpdateToOneWithWhereWithoutRegistrosInput = {
    where?: AsignacionRutinaWhereInput
    data: XOR<AsignacionRutinaUpdateWithoutRegistrosInput, AsignacionRutinaUncheckedUpdateWithoutRegistrosInput>
  }

  export type AsignacionRutinaUpdateWithoutRegistrosInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    entrenadorId?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rutina?: RutinaUpdateOneRequiredWithoutAsignacionesNestedInput
  }

  export type AsignacionRutinaUncheckedUpdateWithoutRegistrosInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    entrenadorId?: StringFieldUpdateOperationsInput | string
    rutinaId?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EjercicioUpsertWithoutRegistrosProgresoInput = {
    update: XOR<EjercicioUpdateWithoutRegistrosProgresoInput, EjercicioUncheckedUpdateWithoutRegistrosProgresoInput>
    create: XOR<EjercicioCreateWithoutRegistrosProgresoInput, EjercicioUncheckedCreateWithoutRegistrosProgresoInput>
    where?: EjercicioWhereInput
  }

  export type EjercicioUpdateToOneWithWhereWithoutRegistrosProgresoInput = {
    where?: EjercicioWhereInput
    data: XOR<EjercicioUpdateWithoutRegistrosProgresoInput, EjercicioUncheckedUpdateWithoutRegistrosProgresoInput>
  }

  export type EjercicioUpdateWithoutRegistrosProgresoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    musculoObjetivo?: StringFieldUpdateOperationsInput | string
    urlVideo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rutinaEjercicios?: RutinaEjercicioUpdateManyWithoutEjercicioNestedInput
  }

  export type EjercicioUncheckedUpdateWithoutRegistrosProgresoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    musculoObjetivo?: StringFieldUpdateOperationsInput | string
    urlVideo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rutinaEjercicios?: RutinaEjercicioUncheckedUpdateManyWithoutEjercicioNestedInput
  }

  export type RutinaEjercicioCreateManyEjercicioInput = {
    id?: string
    rutinaId: string
    series: number
    repeticiones: string
    cargaSugerida: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistroProgresoCreateManyEjercicioInput = {
    id?: string
    asignacionId: string
    fechaRegistro: Date | string
    setsRealizados: number
    repeticionesMax: number
    cargaLevantada: Decimal | DecimalJsLike | number | string
    notasEntrenador?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RutinaEjercicioUpdateWithoutEjercicioInput = {
    id?: StringFieldUpdateOperationsInput | string
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: StringFieldUpdateOperationsInput | string
    cargaSugerida?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rutina?: RutinaUpdateOneRequiredWithoutEjerciciosNestedInput
  }

  export type RutinaEjercicioUncheckedUpdateWithoutEjercicioInput = {
    id?: StringFieldUpdateOperationsInput | string
    rutinaId?: StringFieldUpdateOperationsInput | string
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: StringFieldUpdateOperationsInput | string
    cargaSugerida?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutinaEjercicioUncheckedUpdateManyWithoutEjercicioInput = {
    id?: StringFieldUpdateOperationsInput | string
    rutinaId?: StringFieldUpdateOperationsInput | string
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: StringFieldUpdateOperationsInput | string
    cargaSugerida?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroProgresoUpdateWithoutEjercicioInput = {
    id?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    setsRealizados?: IntFieldUpdateOperationsInput | number
    repeticionesMax?: IntFieldUpdateOperationsInput | number
    cargaLevantada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notasEntrenador?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asignacion?: AsignacionRutinaUpdateOneRequiredWithoutRegistrosNestedInput
  }

  export type RegistroProgresoUncheckedUpdateWithoutEjercicioInput = {
    id?: StringFieldUpdateOperationsInput | string
    asignacionId?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    setsRealizados?: IntFieldUpdateOperationsInput | number
    repeticionesMax?: IntFieldUpdateOperationsInput | number
    cargaLevantada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notasEntrenador?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroProgresoUncheckedUpdateManyWithoutEjercicioInput = {
    id?: StringFieldUpdateOperationsInput | string
    asignacionId?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    setsRealizados?: IntFieldUpdateOperationsInput | number
    repeticionesMax?: IntFieldUpdateOperationsInput | number
    cargaLevantada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notasEntrenador?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutinaEjercicioCreateManyRutinaInput = {
    id?: string
    ejercicioId: string
    series: number
    repeticiones: string
    cargaSugerida: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AsignacionRutinaCreateManyRutinaInput = {
    id?: string
    clienteId: string
    entrenadorId: string
    fechaInicio: Date | string
    fechaFin: Date | string
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RutinaEjercicioUpdateWithoutRutinaInput = {
    id?: StringFieldUpdateOperationsInput | string
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: StringFieldUpdateOperationsInput | string
    cargaSugerida?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ejercicio?: EjercicioUpdateOneRequiredWithoutRutinaEjerciciosNestedInput
  }

  export type RutinaEjercicioUncheckedUpdateWithoutRutinaInput = {
    id?: StringFieldUpdateOperationsInput | string
    ejercicioId?: StringFieldUpdateOperationsInput | string
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: StringFieldUpdateOperationsInput | string
    cargaSugerida?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutinaEjercicioUncheckedUpdateManyWithoutRutinaInput = {
    id?: StringFieldUpdateOperationsInput | string
    ejercicioId?: StringFieldUpdateOperationsInput | string
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: StringFieldUpdateOperationsInput | string
    cargaSugerida?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsignacionRutinaUpdateWithoutRutinaInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    entrenadorId?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registros?: RegistroProgresoUpdateManyWithoutAsignacionNestedInput
  }

  export type AsignacionRutinaUncheckedUpdateWithoutRutinaInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    entrenadorId?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registros?: RegistroProgresoUncheckedUpdateManyWithoutAsignacionNestedInput
  }

  export type AsignacionRutinaUncheckedUpdateManyWithoutRutinaInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    entrenadorId?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroProgresoCreateManyAsignacionInput = {
    id?: string
    ejercicioId: string
    fechaRegistro: Date | string
    setsRealizados: number
    repeticionesMax: number
    cargaLevantada: Decimal | DecimalJsLike | number | string
    notasEntrenador?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistroProgresoUpdateWithoutAsignacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    setsRealizados?: IntFieldUpdateOperationsInput | number
    repeticionesMax?: IntFieldUpdateOperationsInput | number
    cargaLevantada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notasEntrenador?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ejercicio?: EjercicioUpdateOneRequiredWithoutRegistrosProgresoNestedInput
  }

  export type RegistroProgresoUncheckedUpdateWithoutAsignacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    ejercicioId?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    setsRealizados?: IntFieldUpdateOperationsInput | number
    repeticionesMax?: IntFieldUpdateOperationsInput | number
    cargaLevantada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notasEntrenador?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroProgresoUncheckedUpdateManyWithoutAsignacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    ejercicioId?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    setsRealizados?: IntFieldUpdateOperationsInput | number
    repeticionesMax?: IntFieldUpdateOperationsInput | number
    cargaLevantada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notasEntrenador?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}