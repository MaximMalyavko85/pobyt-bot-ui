export interface ITest {
  name: string;
  id: number;
}

export interface ITestStore {
  isLoading: boolean;
  tests: ITest[];
  setLoading: (flag: boolean) => void;
}
