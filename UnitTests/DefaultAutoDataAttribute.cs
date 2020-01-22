using AutoFixture;
using AutoFixture.Xunit2;
using AutoFixture.AutoNSubstitute;

namespace AngularPWADotNetCore.UnitTests
{
    public class DefaultAutoDataAttribute: AutoDataAttribute
    {
        public DefaultAutoDataAttribute()
           : base(() => new Fixture()
               .Customize(new AutoNSubstituteCustomization { ConfigureMembers = true }))
        {
        }
        public DefaultAutoDataAttribute(params ICustomization[] customizations)
            : base(() =>
                new Fixture()
                    .Customize(new AutoNSubstituteCustomization { ConfigureMembers = true })
                    .Customize(new CompositeCustomization(customizations)))
        {
        }
    }
}