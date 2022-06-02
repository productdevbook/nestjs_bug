export interface ISingleJwt {
  time: string;
  cookieName: string;
}

export interface IJwt {
  private: string;
  public: string;
  access: ISingleJwt;
  refresh: ISingleJwt;
  cookieRefresh: string;
}
