
              <Switch>

              <Route
                path={process.env.PUBLIC_URL + "/"}
                component={HomePlants}
                exact
              />

              <Route path="/about">
                <About />
              </Route>

              {/* Shop pages */}
              <Route
                path={process.env.PUBLIC_URL + "/shop"}
                component={ShopGridStandard}
              />


              {/* Shop product pages */}
              <Route
                path={process.env.PUBLIC_URL + "/product/:id"}
                render={(routeProps) => (
                  <Product {...routeProps} key={routeProps.match.params.id} />
                )}
              />
              <Route
                path={process.env.PUBLIC_URL + "/product-tab-left/:id"}
                component={ProductTabLeft}
              />
             

              {/* Blog pages */}

              <Route
                path={process.env.PUBLIC_URL + "/blog"}
                component={BlogRightSidebar}
              />
              <Route
                path={process.env.PUBLIC_URL + "/blog"}
                component={BlogDetailsStandard}
              />

              {/* Other pages */}
              <Route
                path={process.env.PUBLIC_URL + "/about"}
                component={About}
              />
              <Route
                path={process.env.PUBLIC_URL + "/contact"}
                component={Contact}
              />
              <Route
                path={process.env.PUBLIC_URL + "/my-account"}
                component={MyAccount}
              />
              <Route
                path={process.env.PUBLIC_URL + "/login-register"}
                component={LoginRegister}
              />

              <Route
                path={process.env.PUBLIC_URL + "/cart"}
                component={Cart}
              />
              <Route
                path={process.env.PUBLIC_URL + "/wishlist"}
                component={Wishlist}
              />
              <Route
                path={process.env.PUBLIC_URL + "/compare"}
                component={Compare}
              />
              <Route
                path={process.env.PUBLIC_URL + "/checkout"}
                component={Checkout}
              />

              <Route
                path={process.env.PUBLIC_URL + "/not-found"}
                component={NotFound}
              />

              <Route exact component={NotFound} />
            </Switch>