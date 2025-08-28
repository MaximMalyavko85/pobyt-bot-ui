import { ApiService } from "@shared/configs";

class TestsService extends ApiService {
  constructor() {
    super();
  }

  public async getTests() {
    return { data: {} };
  }
}

const testsService = new TestsService();

export default testsService;
